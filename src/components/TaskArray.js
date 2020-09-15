import React from 'react';
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { store } from '../redux/store';

const TaskArray = ({ projectId }) => {
    console.log(store.getState());
    console.log(projectId)
    const project = useSelector(state => state.projects.find(project => project.id == parseInt(projectId)));
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

