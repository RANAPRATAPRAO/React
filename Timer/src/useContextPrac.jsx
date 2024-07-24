import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import './App.css'


const ThemeContext=createContext();


 export const ThemeProvider=({children})=>{
    const [theme, setTheme]=useState("light");


    return(
       <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
       </ThemeContext.Provider>
    )
}



const ThemeComponenet=()=>{
    const {theme, setTheme}=useContext(ThemeContext);
    return(
        <div className="container" style={{background:theme==='light'?'#fff':'#333',color:theme==='light'?'#000' : '#fff'}}>
            <div className="items">
            <p>The current theme is {theme}</p>
            <button onClick={()=> setTheme(theme==='light'?'dark':'light')}>Change Theme</button>
            </div>
        </div>
    )
}

export default ThemeComponenet;

