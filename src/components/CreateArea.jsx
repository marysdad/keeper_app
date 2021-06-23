import React, {useState} from "react";

function CreateArea(props) {

  const [inputNote, setInputNote] = useState("");//this state holds old and new note
  
  function handleChange(event){
    const newNote = event.target.value;
    setInputNote(newNote);
  }

  return (
    <div>
      <form>
        <input  
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={inputNote}
         />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
