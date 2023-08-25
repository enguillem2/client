import { useEffect, useState, useCallback } from "react";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../api/tasks";
import axios from "axios"


function HomePage() {
    const [tasks, setTasks] = useState([]);
    const url = "http://192.168.1.156:8008/api/tasks"

    const fetchTasks = useCallback(async () => {
        const res = await axios.get(url);
        console.log("res::", res.data)
        setTasks(res.data)
        console.log("tasks:", tasks)
    }, []);
    console.log("tasks2:", tasks)

    let contentTasks = <p>No data..</p>;
    if (tasks.length > 0) {
        contentTasks = <div>{
            <ul>
                {tasks.map((task) => {
                    return <li>{task.title}</li>
                })}
            </ul>
        }</div>
    }




    // useEffect(() => {
    //     async function fetchTasks() {
    //         const res = await axios.get(url)
    //         console.log("res",res.data)
    //         setTasks(res.data)
    //         console.log("taks",tasks)

    //     }
    //     fetchTasks()
    // }, []);

    return (
        <>
            <h1>Tasks</h1>
            <button onClick={fetchTasks}>search</button>
            <div>
                {contentTasks}
            </div>
        </>
    );
}

export default HomePage;