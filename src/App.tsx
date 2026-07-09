import './App.css'
import {useState} from "react"

function App() {
  const [todos,setTodos] = useState<String[]>([])
  const [newTodo,setnewTodo] = useState("")

  
  return (
    <div className="container" >
      <div className="form">
      <input  className="todo-input" value={newTodo} onChange={e => setnewTodo(e.target.value)} />
      <button className="todo-button" onClick={() => {if (newTodo) { setTodos([...todos,newTodo]); setnewTodo("");}}}>Submit</button>
      </div>

      {todos.map((todo)=>{return <div className="todo-item"><button className="delete-button" onClick={()=>{setTodos(todos.filter(t => t!==todo))}}>X</button> <li>{todo}</li></div>})}
    </div>
  )
}

export default App