import Task from './Task';
import { useState } from 'react';

const checkboxInstr = {
  position : "absolute",
  left : "63.8%",
  bottom : "44%",
  textAlign : "center",
  fontWeight : "bold",
  textDecoration : "underline"
}


const Tasks = (props) => {

    const facilDeletes = (e, deleteTasks) => {
      
      deleteTasks();
      
    }
    
    if (props.tasks.length === 0) {
        return (
          <>
          
          <div>$ No tasks right now!</div>
          </>
          

        )
    }

    else {

        return (
            <> 
              <div style = {checkboxInstr}>Completed?</div>
              {props.tasks.map((task, index) => (
                <Task key={index}  task = {task.task}  date = {task.date} priority = {task.priority} id = {task.id} prepareDelete = {props.prepareDelete}/>
                
                
              
              ))}
              <input onClick = {(e)=>facilDeletes(e, props.deleteTasks)} style={{backgroundColor : "#000", padding: "5px", borderWidth : "medium", borderColor : "#c6f6d5"}}type="submit" value="Complete"/>
            </>
          )
    
    }
    

}

export default Tasks;
