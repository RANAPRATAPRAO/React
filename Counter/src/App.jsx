import React, { useState } from 'react'


function App(){
  const [count, setCount]=useState(30)

  const addValue=()=>{
    setCount(count=>count+1);


  }
  const removeValue=()=>{
     setCount(count-1);
  }


  return(
      <>
      <h1>This is counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue}>Add value</button><br/>
      <button onClick={removeValue}>Remove Value</button>
      </>
  );
}

export default App;