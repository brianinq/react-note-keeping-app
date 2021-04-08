import React, { useState } from "react";

function Compose(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function changeHandler(event) {
    const { name, value } = event.target;

    setNote((previousText) => {
      return { ...note, [name]: value }; //replacing the previous values in title and content
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(note);
          setNote({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
          required
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Compose;
