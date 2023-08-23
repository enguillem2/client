// import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TaskForm from "./pages/TaskForm"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/task/new" element={<TaskForm/>} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
