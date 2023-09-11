import React, { useState } from 'react';
import styles from './TaskUpdate.css';

const TaskUpdate = ({ task, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.text);

    const handleEdit = () => {
        onEdit(task.id, editedTask);
        setIsEditing(false);
    };

    return (
        <div className="taskUpdate">
            {isEditing ? (
                <div>
                    <input type="text" value ={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
                <div>
                    {task.text}
                    <button class="taskbtn" onClick={()=> setIsEditing(true)}>Edit</button>
                    <button class="taskbtn" onClick={()=> onDelete(task.id)}>Delete</button>
                </div>     
            )}
        </div>
    )
}

export default TaskUpdate;