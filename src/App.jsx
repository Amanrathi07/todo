import { useState } from "react";

function App() {

  const[allTodos,setAllTodos]=useState([])

  const [singleTodo,setSingleTodo] = useState({title:"",disc:""})
  

  function hendelAddTodo() {
    console.log(allTodos);
    setAllTodos(prevValue => [...prevValue,singleTodo])
  }
  return (
    <>
    <div>
        <input type="text" placeholder="title" onChange={(e)=> {setSingleTodo((prevValue)=>({...prevValue,title:e.target.value}))}} />
            <br />
            <br />  
        <input type="text" placeholder='dics'  onChange={(e)=> {setSingleTodo((prevValue)=>({...prevValue,disc:e.target.value}))}} />
            <br />
            <br />
        <button onClick={hendelAddTodo}>add todo</button>
    </div>   

    <div>
      {allTodos.map((data,i) =>
        <div key={i}>
        <p>{i+1}</p>
        <h1>{data.title}</h1>
        <p>{data.disc}</p>
      </div>)
      }
    </div>

    </>
  )
}

export default App
