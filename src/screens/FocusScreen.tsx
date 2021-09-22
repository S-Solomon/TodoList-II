import React from 'react'
import { TasksProps } from '../types'

type Props =  TasksProps & {}

const FocusScreen: React.FC<Props> = ({ focusedTask: task, updateTaskCompletion, shuffleFocusdTask }) => {
    // const task = tasks.filter((task) => !task.isComplete)[0]; 

    const handleMarkCompleted = () => {
        if (task)
        updateTaskCompletion(task.id, true)
    }

    const handleNopeClick = () => {
        shuffleFocusdTask();
    }

    return task ? (
        <div>
            <div>{task.label}</div>
            <button onClick={handleMarkCompleted}>mark completed</button>
            <button onClick={handleNopeClick}>nope</button>
        </div>
    ) : (
        <div>No incomplete task</div>
    );
}

export default FocusScreen
