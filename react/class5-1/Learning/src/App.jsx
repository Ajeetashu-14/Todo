// import './App.css'
import {useState} from "react"
//useState is a hook used to define state

function App() {

  const [todos,setTodos] = useState([]);
  console.log("inside APP")

  function addTodo(){
    console.log("inside addTodo function")
    setTodos([...todos,{
      title: "new title",
      description: "some description of new todo"
    }])
  }

  return (

    <div>

        <button onClick={addTodo}>Add a todo</button>

        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}></Todo>
        })}

    </div>
  )
}

function Todo(props){ 
  console.log("inside Todo funttion")
  return <div>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
  </div>
}

export default App
