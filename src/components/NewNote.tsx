'use client'
import { Tag } from '@/types/types';
import React, { useState } from 'react'
import uniqueId from 'lodash.uniqueid';
import { createNote } from '@/app/api/notes';
import { useDispatch } from 'react-redux';
import { setTags } from '@/store/slices/notesSlice';

interface NewNoteProps {
    tags: Tag[];
}
const NewNote: React.FC<NewNoteProps> = ({ tags: fetchedTags }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const dispatch = useDispatch();
    dispatch(setTags(fetchedTags));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Формируем данные для отправки
        const noteData = {
            id: uniqueId(),
            title,
            content,
            tag: selectedTag,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };

        // Отправка данных на сервер
        try {
            const response = await createNote(noteData);

            if (response.ok) {
                // Очистка полей формы после успешной отправки
                setTitle('');
                setContent('');
                setSelectedTag('');
                alert('Заметка успешно создана!');
            } else {
                alert('Ошибка при создании заметки.');
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Ошибка при отправке данных.');
        }
    };
    return (
        <form className="container mt-5" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Создать заметку</h2>

            {/* Заголовок */}
            <div className="mb-3">
                <label htmlFor="noteTitle" className="form-label">Заголовок</label>
                <input
                    type="text"
                    className="form-control"
                    id="noteTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            {/* Контент */}
            <div className="mb-3">
                <label htmlFor="noteContent" className="form-label">Контент</label>
                <textarea
                    className="form-control"
                    id="noteContent"
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>

            {/* Выбор тега */}
            <div className="mb-3">
                <label htmlFor="noteTag" className="form-label">Выберите тег</label>
                <select
                    className="form-select"
                    id="noteTag"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="">Выберите тег</option>
                    {fetchedTags.map((tag) => (
                        <option key={tag.id} value={tag.name}>{tag.name}</option>
                    ))}
                </select>
            </div>

            {/* Кнопка отправки */}
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Создать заметку</button>
            </div>
        </form>
    )
}

export default NewNote