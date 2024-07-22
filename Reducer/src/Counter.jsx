import React from "react";
import { useReducer } from "react";

const inintialState=0;

const reducer=(state, acction)=>{
    switch(acction.type){
        case "increment":
            return  state+1;
        case "decrement":
            return state-1;
        case "reset":
            return inintialState;
        default:
            throw new Error();
    };
}


const Counter=()=>{

    const [state, dispatch]=useReducer(reducer, inintialState);

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>INcrement</button>
            <button onClick={()=>dispatch({type:"decrement"})}>decremment</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
}

export default Counter;