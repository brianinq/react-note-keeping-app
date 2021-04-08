import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Fab } from "@material-ui/core";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <HighlightOffIcon />
      </Fab>
    </div>
  );
}

export default Note;
