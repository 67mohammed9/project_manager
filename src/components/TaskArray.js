import React from 'react';
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

const TaskArray = () => {
    const  tasks = useSelector(state => state.tasks);
    return (
        <div>     
            {
                tasks.map(taskItem =>{
                    return <TaskItem key={taskItem} task={taskItem} />
                })
            }
        </div>

    );
};



export default TaskArray;