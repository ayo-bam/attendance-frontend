import React from 'react';
import backgroundImage from '../assets/Image/background-image.png'; // Background image import
import lockIcon from '../assets/Image/Vector.png'; // Lock icon import
import email from '../assets/Image/email.png';
const Login = () => {
  return (
    <div className="flex pl-20 h-screen ">
      {/* Left Half: Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12 top-5">
        {/* Logo */}
        <img src={require('../assets/Image/logo.png')} alt="Logo" className=" mb-4 pr-56 " />

        {/* Login Title */}
        <h2 className=" text-xl font-bold mb-8 pr-40">Log in to your Account</h2>

        {/* Login Form */}
        <form className="w-full max-w-sm">
          {/* Email Input */}
          <div className="relative w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <img
              src={email}
              alt="email Icon"
              className="absolute left-3 w-[20px] h-[16px] gap-0 top-4"
            />
          </div>

          {/* Password Input */}
          <div className="relative w-full mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <img
              src={lockIcon}
              alt="Lock Icon"
              className="absolute left-3 w-[18px] h-[16px] gap-0 top-4"
            />
          </div>

          {/* Login Buttons */}
          <button className="bg-orange-400 text-white w-full p-3 rounded-lg mb-4 hover:bg-orange-600 transition-colors">
            Log In as Tutor
          </button>
          <button className="bg-orange-950 text-white w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
            Log In as Super Admin
          </button>
        </form>
      </div>

      {/* Right Half: Background Image */}
      <div
        className=" bg-cover p-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>
  );
};

export default Login;
