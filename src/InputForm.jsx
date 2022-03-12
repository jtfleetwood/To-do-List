import { useState } from "react";
import Tasks from './Tasks';

const Form = ({onAdd}) => {

    const [title1, setTitle] = useState('');
    const [id1, setId] = useState('');
    const [location1, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title1 || !id1 || !location1) {
            alert("Please fill out all available fields.");
        }

        else {
            onAdd(String(title1), String(id1), String(location1));

            setTitle('');
            setId('');
            setLocation('');
        }
        
    }

   
    return (
        <>
            <form onSubmit = {onSubmit}>
                <label>
                Task: $&nbsp;
                <input style ={{backgroundColor : "#000"}} type="text" name="Title of Task: " value = {title1} onChange = {(e) =>  setTitle(e.target.value)}/>
                </label>
                <div/>
                <br/>
                <label>
                Due Date: $&nbsp;
                <input style ={{backgroundColor : "#000"}} type="text" name="Title of Task: " value = {id1} onChange = {(e) => setId(e.target.value)}/>
                </label>
                <div/>
                <br/>
                <label>
                Priority (1-3): $&nbsp; 
                <input style ={{backgroundColor : "#000"}}type="text" name="Title of Task: " value = {location1} onChange = {(e) =>  setLocation(e.target.value)}/>
                </label>
                <br></br>
                <br></br>
                <input style={{backgroundColor : "#000", padding: "5px", borderWidth : "medium", borderColor : "#c6f6d5"}}type="submit" value="Submit"/>
                <br/>
                <br/>
            </form >
      </>
      
    )
}

export default Form;