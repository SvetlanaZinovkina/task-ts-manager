import { Note } from '@/types/types';

const API_URL = 'http://localhost:5001';

export const getNotes = async () => {
  const res = await fetch(`${API_URL}/notes`);
  const notes = await res.json();
  return notes;
};

export const getTags = async () => {
  const res = await fetch(`${API_URL}/tags`);
  const tags = await res.json();
  return tags;
};

export const createNote = async (note: Note) => {
  const res = await fetch(`${API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return res.json();
};

export const updateNote = async (note: Note) => {
  const res = await fetch(`${API_URL}/note/${note.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return res.json();
};

export const deleteNote = async (id: string) => {
  const res = await fetch(`${API_URL}/note/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
