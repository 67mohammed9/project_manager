import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTask} from '../redux/actions'



const TaskInput = ({projectId}) => {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    
   
    const onChange = (event) =>{
        setTask(event.target.value)
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (task.trim() ==='') return;
        dispatch(addTask(task,projectId))
        setTask('');
    };


    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <input 
                 name="task" 
                 type="text" 
                 value={task}
                 placeholder="create a task"
                 onChange={onChange}
                 />
                <button
                    onClick={onSubmitHandler}
                >Add Task</button>
            </div>
        </form>
        
    );
};


export default TaskInput;