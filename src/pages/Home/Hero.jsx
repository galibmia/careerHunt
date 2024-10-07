import React from "react";
import heroImg from "../../assets/images/Hero.png";

const Hero = () => {
  return (
    <div className="hero bg-[#f9f9ff] pt-14 pb-8 md:pb-0">
      <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="md:w-1/2 px-8"
        />
        <div className="md:w-1/2 px-10 md:px-0 flex flex-col md:block justify-center">
          <h1 className="md:text-[80px] text-2xl font-extrabold leading-tight">One Step Closer To Your <span className="gradient-text">Dream Job</span></h1>
          <p className="py-6 text-[#757575] text-lg md:w-[500px]">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="px-7 py-5 rounded-lg cursor-pointer gradient-btn-bg hover:bg-[#7E90FE] text-white text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
