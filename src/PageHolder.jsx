import React from 'react';
import './App.css';
import Tasks from './Tasks';
import Form from './InputForm';



const PageHolder = (props) => {

    

    return (
        
        <>
        <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://unpkg.com/tailwindcss@1.0.4/dist/tailwind.min.css" rel="stylesheet"/>

        </head>
        <tbody className="h-screen overflow-hidden flex items-center justify-center" style={{background : "#edf2f7"}}>
                <div className="w-1/2 mx-auto">
            <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                </div>
                <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                </div>
                <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                </div>
                <div className="mx-auto pr-16" id="terminaltitle">
                    <p className="text-center text-sm">jt@linux-desktop: ~</p>
                </div>
            
                </div>
                <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
                    <Form onAdd = {props.onAdd}></Form>
                    
                    <br/>
                <Tasks tasks = {props.appTasks} deleteTasks = {props.deleteTasks} prepareDelete = {props.prepareDelete}/>
                
                <br/>
                <br/>
                </div>
            </div> 
            </div>
        </tbody>
        </>

    
        
       
    )
}

export default PageHolder;