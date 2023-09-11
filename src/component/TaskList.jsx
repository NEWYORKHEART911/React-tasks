import React, { useState } from 'react';
import TaskUpdate from './TaskUpdate';
import styles from './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks([...tasks, {id: Date.now(), text: newTask }]);
            setNewTask("");
        }
    }

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    }

    const editTask = (taskId, editedTask) => {
        const updatedTasks = tasks.map((task) => 
        task.id === taskId ? {...task, text:editedTask} : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div class="task-list">
            <h2>ToDo List</h2>
            <div class="theList">
                <input type="text" placeholder="Add a task" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>
            <div class="indivTasks">
                <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskUpdate task={task} onDelete={deleteTask} onEdit={editTask} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default TaskList;