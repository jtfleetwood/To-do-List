import PropTypes from 'prop-types'
import React from 'react';
import './App.css'


const checkChanged = (e, prepareDelete, id) => {
    const isChecked = e.target.checked;

    if (isChecked) {
        prepareDelete(id, false);
        
    }

    else {
        prepareDelete(id, true);
    }

    return e;

}

const resetCheck = (e) => {
    e.target.checked = false;
}
const Task = (props) => {
    var ev;
    return (
        <>
        <div className = "taskStyle">$ Task: {props.task} | Due Date: {props.date} | Priority (1-3): {props.priority}
        <label className="checkbox">
            <input onChange = {(e) => {checkChanged(e, props.prepareDelete, props.id);}} className = "checkBoxLabel" type="checkbox" value=""/>
            
        </label> 
        </div>
        <br/>
        </>
    )
}

export default Task;