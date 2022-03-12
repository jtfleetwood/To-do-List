import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm.jsx'
import React, { useState } from 'react';
import { useEffect } from 'react';
import Tasks from './Tasks.jsx';
import Task from './Task';
import PageHolder from './PageHolder.jsx';



function App() {
  
  const [appTasks, setTasks] = useState([])
  const addTask = (title1, id1, location1) => {
  
    setTasks([...appTasks, {task: title1, date: id1, priority: location1}]);

  }

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("app-tasks"));
    setTasks(data);

  },[]);


  useEffect(()=> {
    localStorage.setItem("app-tasks", JSON.stringify(appTasks));
  }, [appTasks]);


  return (
    <>
      <PageHolder onAdd = {addTask} appTasks = {appTasks}></PageHolder>

    </>
    
  );
}

export default App;
