// Student Name: Ebibulukemi Emiowei (Eric)
// Student ID: 301367312
// Date: 09/29/2024

import React from "react";

const Services = () => {
  return (
    <header className="min-h-screen bg-[#1d1b19] text-white flex flex-col justify-center items-center font-jost p-8">
      <div className="max-w-6xl w-full mx-auto space-y-8 pt-32">
        {/* Page Header */}
        <div className="text-left">
          <p className="text-[#987750] text-lg leading-4 pb-10 uppercase tracking-widest">
            Services
          </p>
          <h1 className="text-5xl font-normal text-[#ddd] mt-4 mb-10">
            Services Offered
          </h1>
        </div>

        {/* Introductory Text */}
        <p className="text-[#888] text-[30px] leading-10 mb-10">
          As an experienced and innovative software engineer, UI/UX designer,
          and quality assurance software analyst, I offer a comprehensive suite
          of services aimed at delivering top-tier web applications and digital
          solutions. With a strong foundation in ReactJS and VueJS for frontend
          development, combined with a deep understanding of user experience
          design and quality assurance, I provide end-to-end services that
          ensure both functional and visually appealing outcomes. My approach is
          centered around collaboration, adaptability, and maintaining industry
          best practices, ensuring that each project I work on meets the highest
          standards of performance, scalability, and usability. Below are the
          key services I offer:
        </p>

        <div className="space-y-8">
        {/* Frontend Development */}
        <div>
          <h2 className="text-3xl mb-4">Frontend Development</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#888]">
            <li><strong className="text-white">Specialization in ReactJS and VueJS:</strong> Building modern, dynamic, and responsive user interfaces tailored to meet business needs.</li>
            <li><strong className="text-white">Custom Web Applications:</strong> Developing full-featured web applications from scratch, ensuring high performance, scalability, and maintainability.</li>
            <li><strong className="text-white">Component-based Architecture:</strong> Implementing reusable and modular components to streamline development and improve application consistency.</li>
          </ul>
        </div>

        {/* UI/UX Design */}
        <div>
          <h2 className="text-3xl mb-4">UI/UX Design</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#888]">
            <li><strong className="text-white">User-Centric Design (Figma):</strong> Designing intuitive and visually appealing user interfaces using Figma, focusing on creating seamless user experiences.</li>
            <li><strong className="text-white">Wireframing & Prototyping:</strong> Creating detailed wireframes and interactive prototypes to visualize and test user flows and design concepts before implementation.</li>
            <li><strong className="text-white">Responsive & Adaptive Design:</strong> Ensuring that websites and applications look and function perfectly across all devices (desktop, tablet, mobile).</li>
          </ul>
        </div>

        {/* Quality Assurance & Software Testing */}
        <div>
          <h2 className="text-3xl mb-4">Quality Assurance & Software Testing</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#888]">
            <li><strong className="text-white">End-to-End Testing:</strong> Conducting thorough testing to ensure software reliability, identifying bugs, and ensuring optimal functionality.</li>
            <li><strong className="text-white">Manual & Automated Testing:</strong> Implementing both manual and automated testing processes to guarantee the highest standards of software quality.</li>
            <li><strong className="text-white">Cross-Browser Testing:</strong> Ensuring consistent performance and design across different web browsers and platforms.</li>
          </ul>
        </div>

        {/* Collaborative Project Development */}
        <div>
          <h2 className="text-3xl mb-4">Collaborative Project Development</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#888]">
            <li><strong className="text-white">Agile Collaboration:</strong> Working alongside cross-functional teams in Agile environments to deliver projects efficiently and on time.</li>
            <li><strong className="text-white">Version Control & Code Reviews:</strong> Utilizing Git and other version control systems to ensure smooth collaboration and high-quality code.</li>
          </ul>
        </div>

        {/* Performance Optimization */}
        <div>
          <h2 className="text-3xl mb-4">Performance Optimization</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#888]">
            <li><strong className="text-white">Code Optimization:</strong> Enhancing web applications for speed and performance, ensuring faster load times and improved user engagement.</li>
            <li><strong className="text-white">SEO-Friendly Development:</strong> Implementing best practices to improve website visibility and performance in search engines.</li>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Services;
