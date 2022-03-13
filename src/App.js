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
  const [elemToDelete, setDelete] = useState([])
  const addTask = (title1, id1, location1) => {
    var id = {
      task: title1,
      date: id1,
      priority: location1
    }

    setTasks([...appTasks, {task: title1, date: id1, priority: location1, id: id}]);

  }

  const prepareDelete = (index, reverse) => {
    if (!elemToDelete.includes(index)) {
      setDelete([...elemToDelete, index]);
    }

    else {
      if (reverse) {
        setDelete(elemToDelete.filter((i) => i != index));
      }
    }
    
  }

  const deleteTasks = () => {
    setTasks(appTasks.filter((task) => !elemToDelete.includes(task.id)));
    setDelete([]);
    window.location.reload(false);
  }

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("app-tasks"));
    setTasks(data);

  },[]);

  useEffect(()=> {
    setDelete([]);

  },[]);

  useEffect(()=> {
    localStorage.setItem("app-tasks", JSON.stringify(appTasks));
  }, [appTasks]);



  return (
    <>
      <PageHolder onAdd = {addTask} deleteTasks = {deleteTasks} prepareDelete = {prepareDelete} appTasks = {appTasks}></PageHolder>

    </>
    
  );
}

export default App;
