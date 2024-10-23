'use client'

import React from 'react'
import { Note, State, Tag } from '@/types/types';
import Link from 'next/link';
import routes from '@/routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { setNote, setTags } from '@/store/slices/notesSlice';
import styles from '@/styles/NotesList.module.scss';

interface NotesListProps {
    notes: Note[];
    fetchedTags: Tag[];
}

const NotesList: React.FC<NotesListProps> = ({ notes, fetchedTags }) => {
    const dispatch = useDispatch();
    dispatch(setNote(notes));
    dispatch(setTags(fetchedTags));
    const tags = useSelector((state: State) => state.notes.tags);

    return (
        <ul className={styles.container}>
            {notes.map((note: Note) => {
                const { id, title, content, tag: tagId } = note;
                const tagName = tags.find((tag) => tag.id === tagId)
                return (
                    <li
                        key={id}
                        className={styles['note-container']}
                    >
                        <Link
                            className={styles.title}
                            href={routes.getNote(id)}
                            style={{ maxWidth: '150px' }}
                        >
                            {title}
                        </Link>

                        <span className={styles.content}>{content}</span>

                        <div className="d-flex flex-wrap mb-2 mb-md-0">
                            <p className="bg-secondary-subtle rounded p-2 m-1 text-truncate">{tagName?.name}</p>
                        </div>
                        <div className="btn-group w-30 w-md-auto">
                            <Link className="btn btn-info w-100 w-md-auto" href={routes.editNote(id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 20 20">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                            </svg></Link>
                            <Link className="btn btn-primary w-100 w-md-auto" href={routes.getNote(id)}>Посмотреть</Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default NotesList;
