import React from 'react';
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'


const TaskArray = ({projectId}) => {
    const tasks = useSelector(state=>state.projects.find(project => project.id== projectId).tasks)
    return (
        <div>     
            {
                tasks.map(taskItem =>{
                     return <TaskItem id={projectId} task={taskItem} />     
                 })
                
            }
        </div>

    );
};




export default TaskArray;

