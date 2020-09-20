import React from 'react';
import {useDispatch} from 'react-redux'
import { deleteTask } from '../redux/actions';

const TaskItem = ({id, task}) => {
    const dispatch = useDispatch();
    return (
    <div >
        <div > 
            <div>{task.id}</div>
            <div>
                <h4>{task.description}</h4>
            </div>
            <button
            onClick={()=>dispatch(deleteTask(task.id, id))}
            >Delete Task</button>
        </div>
    </div>
    );
};


export default TaskItem;
