import React from 'react';
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'


const TaskArray = ({ projectId }) => {
    console.log(projectId)
    const project = useSelector(state => state.projects.find(project => project.id == projectId));
    console.log(project);
    return (
        <div>     
            {
                project.tasks.map(taskItem => {
                     return <TaskItem id={projectId} task={taskItem} />     
                 })
                
            }
        </div>

    );
};




export default TaskArray;

