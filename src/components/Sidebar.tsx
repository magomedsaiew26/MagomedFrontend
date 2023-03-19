import React, { useState } from 'react';
import noroffLogo from '../assets/noroff.png';

const Sidebar: React.FC = () => {
    return (
      <div className="flex flex-col w-100 bg-gray-100 h-screen pl-3">
        <div className='flex flex-row items-center'>
            <img src={noroffLogo} className="w-10 h-10 mt-2 mr-2"/>
            <span className='sidebar-heading text-xs'>Alumni Portal</span>
        </div>
        <div className="flex-grow py-4">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Search </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-200"> Notification</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-200"> Chat</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-200"> Events</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-200"> Schedule</button>
        </div>
      </div>
    );
  };

  export default Sidebar;