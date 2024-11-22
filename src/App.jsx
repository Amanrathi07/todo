import { useEffect, useState } from "react";

function App() {

  const [allTodos, setAllTodos] = useState([])

  const [singleTodo, setSingleTodo] = useState({ title: "", disc: "" })


  function hendelAddTodo() {
    if (!singleTodo.title || !singleTodo.disc) {
      return
    }
    setAllTodos(prevValue => [...prevValue, singleTodo]);
    toLocalStorage([...allTodos, singleTodo]);

  }

  function todoDeleat(i) {
    allTodos.splice(i, 1);
    setAllTodos(allTodos);
    toLocalStorage(allTodos);
    fromLocalStorage();
  }

  function toLocalStorage(todo) {
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  function fromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setAllTodos(data)
  }

  useEffect(() => {
    fromLocalStorage()
  }, [])
  return (
    <div className="bg-slate-500 min-h-screen  ">
      <div className="text-center pt-4">
        <h1 className="font-bold text-3xl">Todo App</h1>
        <input className="text-lg mt-5 rounded-md capitalize placeholder-slate-400 focus:outline-none px-3 py-1" type="text" placeholder="title" onChange={(e) => { setSingleTodo((prevValue) => ({ ...prevValue, title: e.target.value })) }} />
        <br />
        <br />
        <input className="text-lg  rounded-md capitalize placeholder-slate-400 focus:outline-none px-3 py-1" type="text" placeholder='dics' onChange={(e) => { setSingleTodo((prevValue) => ({ ...prevValue, disc: e.target.value })) }} />
        <br />
        <br />
        <button className="bg-green-600  px-4 py-0.5 rounded-md text-lg capitalize" onClick={hendelAddTodo}>add todo</button>
      </div>

      <div className="pb-20">
        {allTodos.map((data, i) =>
          <div className="flex justify-around  bg-slate-400  rounded-md min-h-16 mt-5 w-[90%] mx-auto sm:w-[40%] md:w[40%] lg:w[30%]   "   key={i}>

            <div className="flex gap-6 w-[70%] overflow-hidden">
              <p className="text-2xl">{i + 1}.</p>
              <div>
                <h1 className="capitalize text-2xl font-semibold">{data.title}</h1>
                <p className="text-1xl text-gray-700/90 ">{data.disc}</p>
              </div>
            </div>

            <button className="bg-red-800 capitalize px-3 my-3 flax inline     rounded-lg  text-white " onClick={() => todoDeleat(i)}>delete<i className="fi fi-rr-trash "></i></button>
          </div>)
        }
      </div>

    </div>
  )
}

export default App
