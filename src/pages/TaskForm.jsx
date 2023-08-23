
import { useState } from "react" 
function TaskForm() {
  const [title,setTitle]=useState('')
  const [description,setDescription] =useState('')
  const handleSubmit= async(e)=>{
    e.preventDefault()
    let url="http://192.168.1.156:8008/api/tasks"
    const res = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        title,
        description
      })
    })
    console.log(res)
  }
  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <form className="bg-zinc-950 p-10" onSubmit={handleSubmit} >
        <input type="text" placeholder="title"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea placeholder="description" rows="3"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e)=>setDescription(e.target.value)}

        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskForm