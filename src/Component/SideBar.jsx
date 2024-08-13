import React, { useState } from 'react';
import { FaTasks, FaCheckCircle, FaSpinner, FaListUl, FaUsers, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-blue-500 text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="w-64 bg-white h-screen shadow-lg ">
          <div className="flex items-center justify-center h-16 bg-gray-100 shadow-md">
            <span className="text-blue-500 text-2xl font-semibold">TaskMe</span>
          </div>
          <nav className="mt-7">
            <a className="flex items-center py-2 px-8  text-gray-700  hover:bg-blue-500 hover:rounded-full border-gray-700 hover:text-gray-700 transition-colors duration-200" href="#">
              <FaListUl className='mr-2'/>
              <span className="mx-4">Dashboard</span>
            </a>

            <Link to="/taskDetails" className="flex items-center mt-5 py-2 px-8 text-gray-600 rounded-full hover:bg-blue-500 hover:rounded-full hover:text-gray-700 transition-colors duration-200" href="#">
              <FaTasks className="mr-2" />
              <span className="mx-4">Tasks</span>
            </Link>

            <Link to="/complete" className="flex items-center mt-5 py-2 px-8 text-gray-600 rounded-full hover:bg-blue-500 hover:rounded-full hover:text-gray-700 transition-colors duration-200" href="#">
              <FaCheckCircle className="mr-2" />
              <span className="mx-4">Completed</span>
            </Link>

            <Link to="/progress" className="flex items-center mt-5 py-2 px-8 text-gray-600 rounded-full hover:bg-blue-500 hover:rounded-full hover:text-gray-700 transition-colors duration-200" href="#">
              <FaSpinner className="mr-2" />
              <span className="mx-4">In Progress</span>
            </Link>

            <Link to="/pending" className="flex items-center mt-5 py-2 px-8 text-gray-600 rounded-full hover:bg-blue-500 hover:rounded-full hover:text-gray-700 transition-colors duration-200" href="#">
              <FaListUl className="mr-2" />
              <span className="mx-4">Pending</span>
            </Link>


            
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;