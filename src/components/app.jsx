import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Compose from "./compose";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((previousNotes) => {
      return [...previousNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes((previousNotes) => {
      return previousNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Compose onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
