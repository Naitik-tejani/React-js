import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from './actions';

function App() {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  // Handle adding a new note
  const handleAddNote = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText,
      };
      dispatch(addNote(newNote));
      setNoteText('');
    }
  };

  // Handle deleting a note
  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="App">
      <h1>React Google Keep Clone</h1>
      
      <div className="note-input">
        <input
          type="text"
          placeholder="Add a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div className="note-list">
        {notes.map(note => (
          <div key={note.id} className="note-item">
            <span>{note.text}</span>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
