import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {

  const [notes, setNotes] = useState([]); // this state holds old and new notes for rendering.

  function addNote(inputNote){
    setNotes(prevNotes =>{
      return[...prevNotes,inputNote];//this feeds the new note into the previous notes array
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      <Note 
        key={1}
        title="kaki"
        content="she is amazing"
      />
      <Footer />
    </div>
  );
}

export default App;
