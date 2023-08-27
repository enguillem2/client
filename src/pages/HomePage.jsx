import { useEffect, useState, useCallback } from "react";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../api/tasks";
import axios from "axios"


function HomePage() {
    const [tasks, setTasks] = useState([]);
    const [firstLoad,setFirtsLoad] = useState(true)

    const loadTasks = useCallback(async () => {
        const res = await fetchTasks();
        setTasks(res.data)
    }, []);

    let contentTasks = <p>No data..</p>;
    if (tasks.length > 0) {
        contentTasks = <TaskList tasks={tasks} />
    }else if (firstLoad){
        setFirtsLoad(false)
        loadTasks()
    }
    
    return (
        <>
            <h1>Tasks</h1>
            <div>
                {contentTasks}
            </div>
        </>
    );
}

export default HomePage;