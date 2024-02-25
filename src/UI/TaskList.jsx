import { CiCircleCheck } from "react-icons/ci"
import { Button } from "./shadcn/Button"
import { FaRegTrashAlt } from "react-icons/fa"
import { useState } from "react"
import { useLocalStorage } from "@uidotdev/usehooks"
import toast from "react-hot-toast"

export function TaskList(){
    const [todoValue,setTodoValue] = useState("")
    const [todos,setTodos] = useLocalStorage("todos",[])
    const submitTodo=(e)=>{
      const newTodo = {
        todoTitle:todoValue,
        todoId:new Date().getTime(),
        completed:false
      }
      e.preventDefault()
      if(todoValue == ""){
        toast.error("خالی نباشه!")
      }else{
        setTodos([...todos,newTodo])
        toast.success("تسکت اضافه شد!")
        setTodoValue("")
      }
    }
    const deleteTodo = (todo)=>{
      const filteredTodos = (todos.filter((t)=>t.todoId != todo.todoId))
      setTodos([...filteredTodos])
      console.log(todo.todoId)
    }
    const completeTodo = (todo)=>{
      const allTodos = [...todos]
      const todoIndex = allTodos.findIndex(t => t.todoId == todo.todoId)
      const completedTodo = todos.find((t)=>t.todoId == todo.todoId)
      completedTodo.completed = !completedTodo.completed
      allTodos[todoIndex] = completedTodo
      setTodos(allTodos)
    }
    return (
      <div className='  p-4 rounded-xl shadow-xl dark:bg-slate-600 w-[310px] h-[310px]'>
        <form onSubmit={(e)=>submitTodo(e)} className=" flex justify-between items-center">
          <input type="text" onChange={(e)=>setTodoValue(e.target.value)} value={todoValue} placeholder='امروز باید....' className='bg-white w p-2 shadow-xl rounded-xl dark:bg-slate-700'/>
          <Button className="bg-sky-300 rounded-full text-white dark:bg-indigo-400 dark:hover:bg-indigo-600 transition-all hover:bg-sky-600" type="submit">+</Button>
        </form>
        <div className='flex flex-col gap-y-3 h-[200px] overflow-y-auto py-2'>
          {todos.map((todo)=><TaskItem todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>)}
        </div>
      </div>
    )
  }
  
  export function TaskItem({todo,deleteTodo,completeTodo}){
  return(
    <div className={` flex items-center p-2 text-cyan-900 dark:text-indigo-50 justify-between bg-sky-100 dark:bg-slate-700 rounded-xl ${todo.completed ? "line-through opacity-70" : null}`}>
      <h2>{todo.todoTitle}</h2>
      <div className='flex gap-x-2'>
      <span onClick={()=>completeTodo(todo)}><CiCircleCheck className='text-xl text-green-400 hover:text-emerald-600 transition-all'/></span>
      <span onClick={()=>deleteTodo(todo)} ><FaRegTrashAlt className='text-xl text-rose-500 hover:text-rose-700 transition-all'/></span>
      </div>
    </div>
  )
  }