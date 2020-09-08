import React from 'react';
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

const TaskArray = () => {
    const  taskDetails = useSelector(state => state.tasks);
    return (
        <div>     
            {
                taskDetails.map(taskItem =>{
                    return <TaskItem key={taskItem.id} desc={taskItem.description} />
                })
            }
        </div>

    );
};



export default TaskArray;