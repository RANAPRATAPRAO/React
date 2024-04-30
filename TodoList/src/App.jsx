import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";


import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App(){
  const [todos, setTodos]=useState([])
  const addTodo=(todo)=>{
     setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
   setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!==id)))
  }

  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("todos"))

    if(data && data.length>0) setTodos(data)

  },[])


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])




  return(
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}} >
 <div>

<div>
  </div>
    <TodoForm />
 </div>
 <div>
  {
    todos.map((todo)=>(
      <div key={todo.id}>
        <TodoItem todo={todo}/>
        </div>
    ))
  }

 </div>

    </TodoProvider>
  )

}

export default App;