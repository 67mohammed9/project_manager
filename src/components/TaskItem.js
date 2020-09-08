import React from 'react';


const TaskItem = ({desc, key}) => {
    return (
    <div className="row">
        <div className="row"> 
            <div>{key} </div>
            <div className ="row">
                <h4>{desc}</h4>
            </div>
            <button>Delete Task</button>
        </div>
    </div>
    );
};


export default TaskItem;