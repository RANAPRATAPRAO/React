import React from "react";
import { useReducer } from "react";
const inintialState={
   name:'',
   email:'',
   password:'',
}

const reducer=(state, action)=>{
    switch(action.type){
        case "set_field":
            return {
                ...state,
                [action.field]:action.value,
            };
        case "reset":
            return inintialState;
        default:
            throw new Error();
    }
}


const HandleForm=()=>{

const [state, dispatch]=useReducer(reducer, inintialState);

const handleChange=(e)=>{
    dispatch({
        type:'set_field',
        field:e.target.name,
        value:e.target.value,
    })
}

    return(

        <form action="">
            <input 
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Enter name"
            />
            <br />
            <input 
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Enter email"
            />

            <br />
            <input 
            type="text"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Enter password"
            />
            <br />

            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </form>

    )
}

export default HandleForm;