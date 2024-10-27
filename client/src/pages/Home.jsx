// Student Name: Ebibulukemi Emiowei (Eric)
// Student ID: 301367312
// Date: 09/29/2024

import React from 'react';
import signature from '../assets/mysignature.svg'; 
import profilePic from '../assets/profile.jpeg';

const Home = () => {
  return (
    <header className="min-h-screen bg-[#1d1b19] text-white flex justify-center items-center p-8 font-jost">
      
      {/* A container that manages the max-width and flex layout of the content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16 pt-32">
        
        {/* Left Section - Text Introduction */}
        <div className="text-left">
          {/* Introduction label */}
          <p className="text-[#987750] text-lg leading-4 pb-10 uppercase tracking-widest">Introduction</p>

          {/* Main Title - Role and Specialization */}
          <h1 className="text-5xl font-normal text-[#ddd] mt-4 mb-10">Software Engineer, UI/UX Designer and Quality Assurance Software Analyst</h1>

          {/* Short description about the developer */}
          <p className="text-[#888] text-[30px] leading-10 mb-6">
            I design, develop and test services for clients of all sizes, specializing in creating stylish, modern web applications and UI designs.
          </p>

          {/* Signature Image */}
          <img
            src={signature}
            alt="signature"
            className='pt-10'
          />
        </div>

        {/* Right Section - Profile Image and Details */}
        <div className="relative">
          {/* Profile picture */}
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-lg object-cover w-full" 
          />

          {/* Border around the image using absolute positioning */}
          <div className="absolute inset-0 border-4 border-gray-800"></div>

          {/* Overlay section at the bottom of the profile picture */}
          <div className="absolute bottom-0 inset-x-0 bg-gray-800 bg-opacity-80 p-4 text-center">
            <p className="text-[#999999] uppercase font-semibold tracking-wider text-xl">Hi there! I am</p>
            <h2 className="text-2xl font-bold">Eric Emiowei</h2>
            <p className="text-gray-400 mt-2">I'm available for a co-op job. Hire me</p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Home;
