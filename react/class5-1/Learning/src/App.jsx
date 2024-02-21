// import './App.css'
import {useState} from "react"
//useState is a hook used to define state

function App() {

  const [todos,setTodos] = useState([{
    title: "Do excercise",
    description: "Go to gym from 4-5",
    completed: true
  },{
    title: "Learn react",
    description: "from 9-12",
    completed: true
  }]);

  function addTodo(){
    setTodos([...todos,{
      title: "new title",
      description: "some description of new todo"
    }])
  }

  return (

    <div>
        {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
        <Todo title={todos[1].title} description={todos[1].description}></Todo> */}

        <button onClick={addTodo}>Add a todo</button>

        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}></Todo>
        })}

    </div>
  )
}

function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
  </div>
}

export default App
