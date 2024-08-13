import React from 'react';
import SideBar from '../Component/SideBar';
import Navbar from '../Component/Navbar';

const HomePages = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="flex-1">
        <Navbar />
      </div>
    </div>
  );
};

export default HomePages;
