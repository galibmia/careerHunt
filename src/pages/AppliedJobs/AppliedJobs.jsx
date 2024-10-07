import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState(null);

  useEffect(() => {
    const appliedJobIds = JSON.parse(localStorage.getItem("jobId")) || [];
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((jobsData) => {
        const appliedData = jobsData.filter((job) =>
          appliedJobIds.includes(job.id)
        );
        console.log(appliedData);
        setAppliedJobs(appliedData);
      });
  }, []);

  if (!appliedJobs) {
    return <h1>Loading...........</h1>;
  }

  return (
    <div className="w-[70%] mx-auto py-24">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold">All Jobs</h1>
        <p className="text-gray-400 my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 my-10">
        {appliedJobs.map((jobData) => (
          <div
            className="p-8 border rounded-lg border-[#E8E8E8] shadow-sm flex items-center justify-between"
            key={jobData.id}
          >
            <div className="flex gap-8 items-center">
              <div className="w-[240px] h-[240px] flex items-center justify-center bg-[#F4F4F4]">
                <img
                  className="h-[45px]"
                  src={jobData.companyLogo}
                  alt="No image"
                />
              </div>
              <div>
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
              </div>
            </div>
            <Link
              to={`/jobs/${jobData.id}`}
              className="gradient-btn-bg text-white px-[18px] py-[11px] rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
