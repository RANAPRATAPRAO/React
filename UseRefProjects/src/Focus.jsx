
import { useEffect, useRef } from "react";
import React from "react";


const Focus=()=>{
    const inputRef=useRef(null);


    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return(
        <div>
            <input type="text" ref={inputRef} name="" id=""  placeholder="auto focus on mount" />
        </div>
    )
}

export default Focus;
