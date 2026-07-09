import './App.css'
import {useState} from "react"

function App() {
  const [todos,setTodos] = useState<String[]>([])
  const [newTodo,setnewTodo] = useState("")

  
  return (
    <>
      <input onChange={e => setnewTodo(e.target.value)} />
      <button onClick={() => setTodos([...todos,newTodo]) setnewTodo("")}>Submit</button>

      {todos.map((todo)=>{return <li>{todo}</li>})}
    </>
  )
}

export default App
