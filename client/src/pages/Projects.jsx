// Student Name: Ebibulukemi Emiowei (Eric)
// Student ID: 301367312
// Date: 09/29/2024

import React from "react";
import kudibar from '../assets/kudibar.png';
import yebox from '../assets/yebox.png';
import cwitch from '../assets/cwitch.png';
import alaajo from '../assets/alaajo.png';
import rig from '../assets/rig.png';
import cway from '../assets/cway.png';

const Projects = () => {
  return (
    <header className="min-h-screen bg-[#1d1b19] text-white flex flex-col justify-center items-center font-jost p-8">
      <div className="max-w-6xl w-full mx-auto space-y-8 pt-32">
        {/* Page Header */}
        <div className="text-left">
          <p className="text-[#987750] text-lg leading-4 pb-10 uppercase tracking-widest">
            Portfolio
          </p>
          <h1 className="text-5xl font-normal text-[#ddd] mt-4 mb-10">
            Featured Projects
          </h1>
        </div>

        {/* Introductory Text */}
        <p className="text-[#888] text-[30px] leading-10 mb-10">
          Throughout my development journey, I have actively participated in and
          contributed to various personal and team-based projects, each designed
          to enhance my skills and deliver real-world solutions. These projects
          reflect my passion for software development, problem-solving, and
          collaborative teamwork.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <a href="https://kudibar-web-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative block">
            <img
              src={kudibar}
              alt="Kudibar"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm text-white">Online Event & Ticketing</p>
              <h2 className="text-2xl font-semibold text-white">Kudibar</h2>
            </div>
          </a>

          {/* Project 2 */}
          <a href="https://yebox.io/" target="_blank" rel="noopener noreferrer" className="relative block">
            <img
              src={yebox}
              alt="Yebox Technologies"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 right-4">
              <p className="text-sm text-white">Website</p>
              <h2 className="text-2xl font-semibold text-white">Yebox Technologies</h2>
            </div>
          </a>

          {/* Project 3 */}
          <a href="https://alaajo-web-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative block">
            <img
              src={alaajo}
              alt="Alaajo"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm text-white">Web Application</p>
              <h2 className="text-2xl font-semibold text-white">Alaajo</h2>
            </div>
          </a>

          {/* Project 4 */}
          <a href="https://www.cwitch.org/" target="_blank" rel="noopener noreferrer" className="relative block">
            <img
              src={cwitch}
              alt="Cwitch Global"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 right-4">
              <p className="text-sm text-white">Website</p>
              <h2 className="text-2xl font-semibold text-white">Cwitch Global</h2>
            </div>
          </a>

          {/* Project 5 */}
          <a href="https://cwayhomeweb.com/" target="_blank" rel="noopener noreferrer" className="relative block">
            <img
              src={cway}
              alt="Cway"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm text-white">Ecommerce</p>
              <h2 className="text-2xl font-semibold text-white">Cway</h2>
            </div>
          </a>

          {/* Project 6 */}
          <a href="https://rig-opal.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative block">
            <img
              src={rig}
              alt="Rig"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute bottom-4 right-4">
              <p className="text-sm text-white">Website</p>
              <h2 className="text-2xl font-semibold text-white">Rig</h2>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Projects;
