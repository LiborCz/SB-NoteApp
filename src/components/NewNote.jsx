import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function NewNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onChangeNote(e) {
    const { name, value } = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e) {
    if (note.title !== "" && note.content !== "") {
      props.addNote(note);
      setNote({ title: "", content: "" });
    }

    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          value={note.title}
          onChange={onChangeNote}
          placeholder="Note Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={onChangeNote}
          placeholder="Write a note..."
          rows="3"
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default NewNote;
