import { useEffect } from "react";
import { useState } from "react";
import  './App.css'
import ThemeComponenet, { ThemeProvider } from "./useContextPrac";


const TImer=()=>{
  const [seconds, setSeconds]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setSeconds(prev=>prev+1);
    },[1000])
    return ()=>clearInterval(interval);
  })
  return(
    <div className="container">
      <h1>Seconds:{seconds}</h1>
    </div>
  )
}



const App=()=>{
  return(
    <ThemeProvider>
      <ThemeComponenet/>
    </ThemeProvider>

  )
}
export default App;


