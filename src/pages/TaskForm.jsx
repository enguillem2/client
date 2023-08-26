
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios"

function TaskForm() {
  const navigate=useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const params=useParams()
  console.log("params",params)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let url = "http://192.168.1.156:8008/api/tasks"
  
    if(params.id){
      let url = `http://192.168.1.156:8008/api/tasks/${params.id}`

      //amb axios
      const res = await axios.put(url, {
        title,
        description
      })
    }else{
      let url = "http://192.168.1.156:8008/api/tasks"

      //amb axios
      const res = await axios.post(url, {
        title,
        description
      })
    }
    console.log("abans del reset")
    e.target.reset()
    navigate('/')
  }

  useEffect(()=>{
    if (params.id){
      console.log("editantdo")
      fetchTaks(params.id)
      
    }

    async function fetchTaks(id){
      const url=`http://192.168.1.156:8008/api/tasks/${id}`
      const res = await axios.get(url)
      console.log(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
    }
  },[])

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <form className="bg-zinc-950 p-10" onSubmit={handleSubmit} >
        <input type="text" placeholder="title"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea placeholder="description" rows="3"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setDescription(e.target.value)}
          value={description}

        ></textarea>
        <button>
          {params.id ? "Update task" : "Create task"}
        </button>
      </form>
    </div>
  )
}

export default TaskForm