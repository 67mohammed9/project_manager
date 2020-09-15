import React from 'react';
import {useDispatch} from 'react-redux'
import { deleteTask } from '../redux/actions';

const TaskItem = ({id, task}) => {
    const dispatch = useDispatch();
    return (
    <div className="row">
        <div className="row"> 
            <div className="row">{task.id}</div>
            <div className ="row">
                <h4>{task.description}</h4>
            </div>
            <button
            onClick={(()=>dispatch(deleteTask(id, task.id)))}
            >Delete Task</button>
        </div>
    </div>
    );
};


export default TaskItem;