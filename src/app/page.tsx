import Link from "next/link";
import { Note, Tag } from '@/types/types';
import { getNotes, getTags } from './api/notes';
import NotesList from "@/components/NotesList";
import styles from '@/styles/Home.module.scss'
import routes from "@/routes/routes";

export default async function Home() {
  const notes: Note[] = await getNotes();
  const fetchedTags: Tag[] = await getTags();
  return (
    <main className={styles.container}>
      <h1 className="text-center mt-2">Заметки</h1>
      <div className={styles.button}>
        <Link href={routes.createNote()} className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 15 15">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </Link>
      </div>
      <NotesList notes={notes} fetchedTags={fetchedTags}/>
    </main>
  );
}
