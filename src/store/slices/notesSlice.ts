import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, Tag } from '@/types/types';

interface NotesState {
  notes: Note[];
  tags: Tag[];
  filter: string[];
  sortBy: 'date' | 'title';
}

const initialState: NotesState = {
  notes: [],
  tags: [],
  filter: [],
  sortBy: 'date',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    setTags: (state, action: PayloadAction<Tag[]>) => {
      state.tags = action.payload;
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter.push(action.payload);
    },
    setSortBy: (state, action: PayloadAction<'date' | 'title'>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setNote, setTags, addNote, editNote, deleteNote, setFilter, setSortBy } =
  notesSlice.actions;
export default notesSlice.reducer;
