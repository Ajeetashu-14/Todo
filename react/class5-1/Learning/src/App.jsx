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

  return (
    <div>
        {JSON.stringify(todos)}
    </div>
  )
}

//component
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
