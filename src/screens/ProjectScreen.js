import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskArray from '../components/TaskArray';
import { useParams } from 'react-router-dom';

const ProjectScreen = () => {
    let params = useParams();
    return (
        <div>
            <TaskInput projectId = {params.id}/>
            <TaskArray projectId = {params.id}/>
        </div>
    );
};



export default ProjectScreen;
