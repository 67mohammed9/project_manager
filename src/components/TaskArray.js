import React from 'react';
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { store } from '../redux/store';

const TaskArray = ({ projectId }) => {
    const project = useSelector(state => state.taskReducer.projects.find(project => project.id == projectId));

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

