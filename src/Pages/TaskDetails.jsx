import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Sidebar from '../Component/SideBar';
import Navbar from '../Component/Navbar';
import FormModal from '../Component/FormModal';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTask, StatusChange } from '../Api/taskApi';


const TaskBoard = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const _id = useMemo(() => user?._id, [user])
    const handleStatus = useCallback(async (status) => {
        console.log("hello");
        // await dispatch(StatusChange(status, _id));
    }, [_id, dispatch]);

    const [tasks, setTasks] = useState([])


// status color

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-red-600'; 
            case 'progress':
                return 'bg-orange-600'; 
            case 'complete':
                return 'bg-green-600'; 
            default:
                return 'bg-gray-300'; 
        }
    };


    useEffect(() => {
        fetchTask(_id).then((res) => {
            setTasks(res.tasks)
            console.log(res.tasks)
        }).catch((error) => {
            console.log(error.message)
        })

    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



    // sortby

    const options = ["Low", "Medium", "High", "All"]
    const [selectedOption, setSelectedOption] = useState(options[0]);


    const handleSortChange = (e) => {
        const selected = e.target.value;
        setSelectedOption(selected);
        onSortChange(selected); 
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
                            <div className="bg-blue-500 text-white px-4 py-2 rounded btn" onClick={openModal}>+ Create Task</div>


                        </div>

                        <div className="flex space-x-4 mb-6">
                            <button className="text-blue-500 border-b-2 border-blue-500 pb-1">Board View</button>

                        </div>

                        <div className='grid grid-cols-3 gap-5 mb-4'>
                            <div className="flex items-center bg-white px-3 h-9  rounded-md">
                                <div className="w-3 h-3 rounded-full bg-red-700 mr-2"></div>
                                <div className="text-md font-semibold">Pending</div>
                            </div>
                            <div className="flex items-center bg-white px-3  rounded-md">
                                <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
                                <div className="text-md font-semibold">Progress</div>
                            </div>
                            <div className="flex items-center bg-white px-3  rounded-md">
                                <div className="w-3 h-3 rounded-full bg-green-700 mr-2"></div>
                                <div className="text-md font-semibold">complete</div>
                            </div>
                        </div>

                        <div className="flex space-x-4">


                        </div>
                        <div className='grid grid-cols-3 gap-3'>


                            {tasks.map((task, taskIndex) => (
                                <div key={taskIndex} className="bg-white p-4 rounded-lg mb-4 shadow">
                                    <div className="flex justify-between items-center mb-2">
                                    <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)}`}>

                                        </div>
                                        <span className={`text-xs ${task.priority.includes('High') ? 'text-red-500' : 'text-yellow-500'}`}>
                                            {task.priority} Priority
                                        </span>
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" >
                                                <div className="w-2 rounded-full">
                                                    <button className="text-black">...</button>

                                                </div>
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow"
                                            >
                                                <li>
                                                    <a onClick={handleStatus("pending")} className="justify-between">
                                                        pending

                                                    </a>
                                                </li>
                                                <li><a onClick={handleStatus("pending")}>progress</a></li>
                                                {/* Use 'li' tag for consistency and apply necessary styles */}
                                                <li>
                                                    <a onClick={handleStatus("completed")} className="cursor-pointer">completed</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-2">{task.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{task.description}</p>
                                    { }
                                    <div className="flex justify-between items-center mb-2 text-xs">
                                        DueDate:
                                        <span className="text-sm text-gray-500">{task.dueDate}</span>

                                    </div>
                                    <div className="flex justify-between items-center">

                                        <button className="text-green-300 text-sm">Edit</button>
                                    </div>
                                </div>
                            ))}

                        </div>


                    </div>
                </div>
                <FormModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>


        </>
    );

};

export default TaskBoard;
