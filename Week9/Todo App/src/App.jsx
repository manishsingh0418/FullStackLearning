import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {	
 const [todos, setTodos] = useState([{
  title: "Go to Gym",
  description: "Go to Gym and workout",
  done: false,
 }]);// I have  1 todos initially 

function addTodo() {
  let newTodo = [];
  for (let i = 0; i < todos.length; i++) {
    newTodo.push(todos[i]);
  }
  newTodo.push({
    title: document.getElementById("title").value,  
    description: document.getElementById("description").value,
    done:false,
  });
  setTodos(newTodo);    
}
  return (
    <div>
      <input id="title" type="text" placeholder="Title" />
      <input id="description" type="text" placeholder="Description" />
      <button onClick={addTodo}>Add a Todo</button>
      <br/>
      {todos.map((todo, index)=>
     <Todo key={index} title={todo.title} description={todo.description} done={todo.done} />
      )}
     </div>


  )
}

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h1>{props.done}</h1>
    </div>
  )
}