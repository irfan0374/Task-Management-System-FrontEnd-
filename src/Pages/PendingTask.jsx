import React, { useState,useEffect } from 'react';
import Sidebar from '../Component/SideBar';
import Navbar from '../Component/Navbar';

import { useSelector } from 'react-redux'
import { statusBased } from '../Api/taskApi';


const PendingTask = () => {
    const [tasks,setTasks]=useState([""])
    const {_id} = useSelector(state => state.userReducer.user)
const status="pending"

    useEffect(()=>{
        statusBased(_id,status).then((res)=>{
    setTasks(res.tasks)
    console.log(res.tasks)
 }).catch((error)=>{
    console.log(error.message)
 })

    },[])
    // sortby

    const options=["Low","Medium","High","All"]
    const [selectedOption, setSelectedOption] = useState(options[0]);


    const handleSortChange = (e) => {
        const selected = e.target.value;
        setSelectedOption(selected);
        onSortChange(selected); // Trigger the callback with the selected sort option
    }

    return (
        
        <>
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="flex-1 p-6 bg-gray-100 overflow-scroll">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Tasks</h1>
                        {/* sortby optiono */}
                        <div className="flex items-center space-x-2">
            <label className="text-sm font-semibold">Sort By:</label>
            <select
                value={selectedOption}
                onChange={handleSortChange}
                className="select select-bordered text-sm"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
                        {/* sortby end */}

                    </div>


                    <div className="flex space-x-4">
                       

                                </div>
                                {tasks&&tasks.length > 0 ? (
    <div className="grid grid-cols-3 gap-3">
        {tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="bg-white p-4 rounded-lg mb-4 shadow">
                <div className="flex justify-between items-center mb-2">
                    <span
                        className={`text-xs ${
                            task.priority === 'High'
                                ? 'text-red-500'
                                : task.priority === 'Medium'
                                ? 'text-orange-500'
                                : 'text-green-500'
                        }`}
                    >
                        {task.priority} Priority
                    </span>
                    <button className="text-gray-400">...</button>
                </div>
                <h3 className="font-bold mb-2">{task.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{task.description}</p>
                <div className="flex justify-between items-center mb-2 text-xs">
                    <span>Due Date:</span>
                    <span className="text-sm text-gray-500">
                        {new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <button className="text-green-500 text-sm">Edit</button>
                </div>
            </div>
        ))}
    </div>
) : (
    <div>No tasks available</div>
)}

                        
                    
                </div>
            </div>
           
        </div>

    
           </>
         );
   
};

export default PendingTask;
