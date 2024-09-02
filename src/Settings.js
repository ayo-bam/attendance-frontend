// Settings.js
import React from 'react';

const Settings = () => {
  return (
    <div className="p-10 w-full">
      <h1 className="text-2xl font-bold mb-10">Settings</h1>
      <div className="flex">
        <div className="w-1/3">
          <div className="bg-white shadow-lg p-5 rounded-lg mb-5">
            <p className="font-semibold">Edit Profile</p>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <p className="font-semibold">Change Your Password</p>
          </div>
        </div>
        <div className="w-2/3 ml-10">
          <div className="flex items-center mb-5">
            <img className="w-20 h-20 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
            <div className="ml-5">
              <button className="text-orange-500 font-bold">Change Picture</button>
            </div>
          </div>
          <input type="text" placeholder="Name student" className="block w-full border mb-5 p-2 rounded" />
          <input type="text" placeholder="Web Development" className="block w-full border mb-5 p-2 rounded" />
          <button className="bg-orange-300 text-white py-2 px-5 rounded-lg">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
