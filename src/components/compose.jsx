import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function Compose(props) {
  const [isZoomed, setZoom] = useState(false);
  function expand() {
    setZoom(true);
  }

  const [note, setNote] = useState({ title: "", content: "" });

  function changeHandler(event) {
    const { name, value } = event.target;

    setNote((previousText) => {
      return { ...note, [name]: value }; //replacing the previous values in title and content
    });
  }

  return (
    <div>
      <form className="create-note">
        {isZoomed && (
          <input
            onChange={changeHandler}
            name="title"
            placeholder="Title"
            value={note.title}
            required
          />
        )}
        <textarea
          onClick={expand}
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows={isZoomed ? "3" : 1}
          value={note.content}
        />
        <Zoom in={isZoomed}>
          <Fab
            onClick={(event) => {
              props.onAdd(note);
              setNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Compose;
