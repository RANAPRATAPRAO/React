import React, { useState } from "react";

import { useTodo } from "../contexts/TodoContext";

function TodoItem({todo}){
    const [tmsg, setTmsg]=useState(todo.todo)
    const [edit, setEdit]=useState(false)

    const {updateTodo,toggleTodo,deleteTodo}=useTodo()

const  editTodo=()=>{
    updateTodo(todo.id,{...todo,todo:tmsg})
    setEdit(false)


    }

    const toggleCompleted=()=>{
toggleTodo(todo.id)
    }




    return(
        <div>
            <input type="checkbox"
            checked={todo.completed}
            onChange={toggleCompleted}
            />
            <input type="text"
            value={tmsg}
            onChange={(e)=>setTmsg(e.target.value)}
            readOnly={!edit}
            />

            <button
            onClick={()=>{
                if(todo.completed) return
                if(edit){
                    editTodo()
                }
                else setEdit((prev)=>!prev)
            }}
            disabled={todo.completed}
            
            >{edit?<span>save</span>:<span>edit</span>}
            </button>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}


export default TodoItem
