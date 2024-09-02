// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-1/4 h-screen p-5">
      <div className="font-bold text-lg mb-5">Larva Coding Academy</div>
      <ul>
        <li className="mb-4"><a href="#mark-attendance" className="text-gray-700">Mark Attendance</a></li>
        <li className="mb-4"><a href="#register-students" className="text-gray-700">Register Students</a></li>
        <li className="mb-4"><a href="#students-list" className="text-gray-700">Students List</a></li>
        <li className="mb-4"><a href="#settings" className="text-orange-500 font-bold">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
