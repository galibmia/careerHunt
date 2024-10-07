import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../../assets/images/bg-1.png";
import { AiOutlineDollarCircle } from "react-icons/ai";
import {
  MdOutlineSubtitles,
  MdOutlineMail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Job = () => {
  const { id } = useParams();
  const jobId = parseFloat(id);
  const [jobData, setJobData] = useState(null);
  

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((jobsData) => {
        const newData = jobsData.find((data) => jobId === data.id);
        console.log(newData);
        setJobData(newData);
      });
  }, []);

  if (jobData === null) {
    return <h1>Loading</h1>;
  }


  const handleApply = (id) => {
    let jobIds = JSON.parse(localStorage.getItem("jobId")) || [];
  
  if (!jobIds.includes(id)) {
    jobIds.push(id);
  }

  localStorage.setItem("jobId", JSON.stringify(jobIds));
  }

  return (
    <div className="">
      <div>
        <img className="w-full relative" src={bgImg} alt="" />
        <h1 className="text-2xl font-extrabold text-black text-center absolute top-60 left-[45%]">
          Job Details
        </h1>
      </div>
      <div className="flex gap-8 w-[70%] mx-auto my-32">
        <div className="w-[70%]">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            {jobData.jobDescription}
          </p>
          <p className="my-8">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {jobData.jobResponsibilities}
          </p>
          <p className="my-8">
            <span className="font-bold">Educational Requirements:</span>
            <span className="block mt-4">{jobData.educationalRequirement}</span>
          </p>
          <p className="my-8">
            <span className="font-bold">Experiences:</span>
            <span className="block mt-4">{jobData.experience}</span>
          </p>
        </div>
        <div className="w-[30%]">
          <div className="gradient-bg p-8 rounded">
            <p className="">
              <span className="font-bold text-xl">Job Details</span>
              <hr className="mt-2 gradient-bg" />
            </p>
            <p className="flex gap-2 items-center text-xl font-medium my-3 text-[#474747] ">
              <AiOutlineDollarCircle className="gradient-text text-2xl" />{" "}
              <span className="text-[#474747] font-bold">Salary :</span>{" "}
              {jobData.salaryRange}
            </p>
            <p className="flex gap-2 items-center text-xl font-medium my-3 text-[#474747] ">
              <MdOutlineSubtitles className="gradient-text text-2xl" />{" "}
              <span className="text-[#474747] font-bold">Job Title :</span>{" "}
              {jobData.jobTitle}
            </p>
            <p className="mt-8">
              <span className="font-bold text-xl">Contact Information</span>
              <hr className="mt-2 gradient-bg" />
            </p>
            <p className="flex gap-2 items-center text-lg font-medium my-3 text-[#868686] ">
              <FiPhone className="gradient-text text-xl text-[#8f7cfe]" />{" "}
              <span className="text-[#474747] font-bold">Phone :</span>{" "}
              {jobData.contactInfo.phone}
            </p>
            <p className="flex gap-2 items-center text-lg font-medium my-3 text-[#868686] ">
              <MdOutlineMail className="gradient-text text-xl text-[#8f7cfe]" />{" "}
              <span>
                <span className="text-[#474747] font-bold">Email :</span>{" "}
                {jobData.contactInfo.email}
              </span>
            </p>
            <p className="flex gap-2 text-lg font-medium my-3 text-[#868686] ">
              <MdOutlineLocationOn className="gradient-text text-2xl text-[#8f7cfe]" />
              <span>
                <span className="text-[#474747] font-bold">Location :</span>{" "}
                {jobData.contactInfo.location}
              </span>
            </p>
          </div>
          <button onClick={() => handleApply(jobData.id)} className="btn gradient-btn-bg w-full mt-8 text-bold text-white">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
