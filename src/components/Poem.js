import React, {useState} from "react";


function Poem({poem}) {
  const [read, setRead]=useState(false)
  
function handleRead (){
  setRead((read)=>!read)
}

  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- {poem.author}</strong>
      </p>
      <button onClick={handleRead}>{read ? "Mark as Unread" : "Mark as Read"} </button>
    </div>
  );
}

export default Poem;
