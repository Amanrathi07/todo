import { useEffect, useState } from "react";

function App() {

  const[allTodos,setAllTodos]=useState([])

  const [singleTodo,setSingleTodo] = useState({title:"",disc:""})
  

  function hendelAddTodo() {
    setAllTodos(prevValue => [...prevValue,singleTodo]);
    toLocalStorage([...allTodos,singleTodo] );
   
  }

  function todoDeleat(i){
    allTodos.splice(i,1);
    setAllTodos(allTodos);
    toLocalStorage(allTodos);
    fromLocalStorage();
    }

  function toLocalStorage(todo){
    localStorage.setItem('todos',JSON.stringify(todo));
  }

  function fromLocalStorage(){
    let data=JSON.parse(localStorage.getItem("todos")) || [] ;
    setAllTodos(data)
  }

  useEffect(()=>{
    fromLocalStorage()
  },[])
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
        <button onClick={()=>todoDeleat(i)}>delete</button>
      </div>)
      }
    </div>
  
    </>
  )
}

export default App
