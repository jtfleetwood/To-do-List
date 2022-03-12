import Task from './Task';
import { useState } from 'react';

const Tasks = (props) => {
    
    if (props.tasks.length === 0) {
        return (
            <div>$ No tasks right now!</div>
        )
    }

    else {

        return (
            <> 
        
              {props.tasks.map((task, index) => (
                <Task key={index}  task = {task.task}  date = {task.date} priority = {task.priority}/>
              ))}
            </>
          )
    
    }
    

}

export default Tasks;
