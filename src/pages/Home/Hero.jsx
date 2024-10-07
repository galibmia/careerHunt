import React from "react";
import heroImg from "../../assets/images/Hero.png";

const Hero = () => {
  return (
    <div className="hero bg-[#f9f9ff] pt-14">
      <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="w-1/2"
        />
        <div className="w-1/2">
          <h1 className="text-[80px] font-extrabold leading-tight">One Step Closer To Your <span className="gradient-text">Dream Job</span></h1>
          <p className="py-6 text-[#757575] text-lg w-[500px]">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="px-7 py-5 rounded-lg cursor-pointer gradient-btn-bg hover:bg-[#7E90FE] text-white text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
