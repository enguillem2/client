
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios"

import { fetchTask,fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";

function TaskForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const params = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (params.id) {
        const res = await updateTask(params.id, {title,description})
      } else {
        const res = await createTask({title,description})
      }
      e.target.reset()
      navigate('/')

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    if (params.id) {
      fetchTask(params.id)
        .then((res) => {
          setTitle(res.data.title)
          setDescription(res.data.description)
        })
        .catch((err) => console.log("errada fetching task",err))
    }

    
  }, [])

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-zinc-950 p-10" onSubmit={handleSubmit} >
          <h1 className="text-3xl font-bold my-4">
            {params.id ? "Update Task" : "Create Task"}
          </h1>
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
          <button
            className="bg-white hover:bg-slate-800 hover:text-white text-slate-800 py-2 px-4 rounded"
          >
            {params.id ? "Update task" : "Create task"}
          </button>
        </form>
        {
          params.id && (

            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded mt-5 px-4"
              onClick={async () => {
                const url = `http://192.168.1.156:8008/api/tasks/${params.id}`
                const res = await axios.delete(
                  url
                );
                navigate('/')


              }}
            >
              Delete
            </button>
          )
        }
      </div>
    </div>
  )
}

export default TaskForm