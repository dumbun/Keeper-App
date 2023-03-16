import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab onClick={handleClick}>
          <Delete />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
