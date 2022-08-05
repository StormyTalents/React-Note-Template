import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  {
    /*here we are adding three dummy notes in our useState hooks for notes*/
  }
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "03/11/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "03/11/2021",
    },
  ]);
  {
    /*this are the staes for searching text and toggle mode*/
  }

  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  {
    /*to store or save the data in local storage even after closing the tab*/
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  {
    /*this is for saving the app data in local storage*/
  }
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  {
    /*this function is for adding new note*/
  }
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  {
    /*this function is for deleting notes in note app with a id*/
  }
  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const updatingNote = (id) => {
    setNotes(
      notes.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        } else {
          return item;
        }
      })
    );
  };
  const handleChangeText = (e, id) => {
    setNotes(
      notes.map((item) => {
        if (item.id === id) {
          return { ...item, text: e.target.value };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <main>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />

        <Search handleSearch={setSearchNote} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote.toLowerCase())
          )}
          handleAddNote={addNote}
          handleUpdate={updatingNote}
          handleChangeText={handleChangeText}
          handleDelete={deletingNote}
        />
      </div>
    </main>
  );
}

export default App;
