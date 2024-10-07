import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const FeaturedJob = () => {
  const [jobsData, setJobsData] = useState(null);

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.slice(0, 4));
        setJobsData(data.slice(0, 4));
      });
  }, []);

  if (jobsData === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="my-32">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
        <p className="text-gray-400 my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {jobsData.map((jobData) => (
          <div
            className="p-8 border rounded-lg border-[#E8E8E8] shadow-sm"
            key={jobData.id}
          >
            <img
              className="h-[45px]"
              src={jobData.companyLogo}
              alt="No image"
            />
            <h1 className="mt-8 text-2xl font-extrabold text-[#474747]">
              {jobData.jobTitle}
            </h1>
            <h6 className="mt-4 text-xl font-semibold text-[#757575]">
              {jobData.companyName}
            </h6>
            <div className="flex gap-4 my-4">
              <p className="gradient-text border border-[#7E90FE] px-[19px] py-[9px] text-lg font-extrabold rounded-md">
                {jobData.jobLocation}
              </p>
              <p className="gradient-text border border-[#7E90FE] px-[19px] py-[9px] text-lg font-extrabold rounded-md">
                {jobData.jobType}
              </p>
            </div>
            <div className="flex gap-6 mb-8">
              <p className="flex items-center gap-2 text-[#757575] text-xl font-semibold">
                <IoLocationOutline className="text-2xl" />{" "}
                {jobData.shortLocation}
              </p>
              <p className="flex items-center gap-2 text-[#757575] text-xl font-semibold">
                <AiOutlineDollarCircle className="text-2xl" /> Salary :{" "}
                {jobData.salaryRange}
              </p>
            </div>
            <Link to={`/jobs/${jobData.id}`} className="gradient-btn-bg text-white px-[18px] py-[11px] rounded">
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to={'all-jobs'} className="gradient-btn-bg text-white px-[28px] py-[19px] rounded">
          Show All Jobs
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
