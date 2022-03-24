import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8004/poems")
    .then(respn=>respn.json())
    .then(setPoems)
  }, 
  [])

    function handleHide(){
      setHidden((hidden)=>!hidden)
    }

    function addPoem(newPoem){
      setPoems(poems => [...poems, newPoem])
    }


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleHide}>Show/hide new poem form</button>
        {hidden ? <NewPoemForm addPoem={addPoem}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
