// Student Name: Ebibulukemi Emiowei (Eric)
// Student ID: 301367312
// Date: 09/29/2024

import React from "react";

const About = () => {
  return (
    <header className="min-h-screen bg-[#1d1b19] text-white flex flex-col justify-center items-center font-jost p-8">
      {/* Container that limits the width of the content and ensures proper spacing between sections */}
      <div className="max-w-6xl w-full mx-auto space-y-8 pt-32">
        {/* Section for the page heading */}
        <div className="text-left">
          {/* Sub-heading for 'About Me' */}
          <p className="text-[#987750] text-lg leading-4 pb-10 uppercase tracking-widest">
            About Me
          </p>
          {/* Main heading 'Biography' */}
          <h1 className="text-5xl font-normal text-[#ddd] mt-4 mb-10">
            Biography
          </h1>
        </div>

        {/* Biography paragraph explaining the user's professional profile */}
        <p className="text-[#888] text-[30px] leading-10 mb-6">
          I'm an energetic and imaginative software engineer specializing in
          ReactJs and VueJs frontend development, UI/UX designer(Figma), and
          quality assurance software analyst, who can work alongside other
          talented IT professionals in creating web applications to the very
          highest standards.
        </p>

        {/* Grid layout: Information on the left, Download CV button on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Section for listing personal information */}
          <div className="space-y-4">
            <ul className="text-lg space-y-4">
              {/* Name */}
              <li className="flex">
                <span className="text-[#888] tracking-[1px] font-medium md:text-2xl uppercase w-1/3">
                  Name
                </span>
                <span className="w-2/3 md:text-2xl">Eric Emiowei</span>
              </li>
              {/* Address */}
              <li className="flex">
                <span className="text-[#888] tracking-[1px] font-medium md:text-2xl uppercase w-1/3">
                  Address
                </span>
                <span className="w-2/3 md:text-2xl">Toronto, ON</span>
              </li>
              {/* Phone */}
              <li className="flex">
                <span className="text-[#888] tracking-[1px] font-medium md:text-2xl uppercase w-1/3">
                  Phone
                </span>
                <a href="tel:+437-559-3780">
                  <span className="w-2/3 md:text-2xl">437-559-3780</span>
                </a>
              </li>
              {/* Email */}
              <li className="flex">
                <span className="text-[#888] tracking-[1px] font-medium md:text-2xl uppercase w-1/3">
                  Email
                </span>
                <a href="mailto:emiowei.eric@gmail.com">
                  <span className="w-2/3 md:text-2xl">
                    emiowei.eric@gmail.com
                  </span>
                </a>
              </li>
              {/* GitHub */}
              <li className="flex">
                <span className="text-[#888] tracking-[1px] font-medium md:text-2xl uppercase w-1/3">
                  GitHub
                </span>
                <a
                  href="https://github.com/EricEE1022"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="w-2/3 md:text-2xl">
                    https://github.com/EricEE1022
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center items-center">
            {/* Link to the CV PDF */}
            <a
              target="_blank"
              href="/cv.pdf"
              download="Eric_Emiowei_CV.pdf"
              className="w-full md:w-2/3 h-48 border-2 border-[#888] rounded-lg flex flex-col justify-center items-center hover:border-[#987750] transition duration-300">
              {/* SVG Icon for download */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-[#888] mb-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>

              {/* Text for the download button */}
              <span className="text-[#888] text-2xl">Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
