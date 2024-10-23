import React from 'react'

const Note = () => {
    return (
        <li key={note.id} className="list-group-item">
            <Link href={`/note/${note.id}`}>
                {note.title}
            </Link>
        </li>
    )
}

export default Note