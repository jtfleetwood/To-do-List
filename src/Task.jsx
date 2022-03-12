import PropTypes from 'prop-types'
import React from 'react';
const fontstyle = {
    fontWeight : 'bold'
};
const Task = (props) => {
    return (
        <div style={fontstyle}>$ Task: {props.task} | Due Date: {props.date} | Priority (1-3): {props.priority}</div>
    )
}

export default Task;