import React from "react";
import DeleteIcone from "@material-ui/icons/Delete";


function Note(props) {

  function handleClick(){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} >
      <DeleteIcone/>
      </button>
    </div>
  );
}

export default Note;
