"use client";
import React, { useState } from "react";

const DATA = [
  {
    id: 1,
    company: {
      name: "Company",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Internship",
    job_work_type: "remote",
    job_location: "",
    salary_per_month: "5000",
  },
  {
    id: 2,
    company: {
      name: "Company 2",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Internship",
    job_work_type: "hybrid",
    job_location: "Pune",
    salary_per_month: "8000",
  },
  {
    id: 3,
    company: {
      name: "Company 3",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Fulltime",
    job_work_type: "in-office",
    job_location: "Mumbai",
    salary_per_year: "500000-700000",
  },
  {
    id: 4,
    company: {
      name: "Company 4",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Fulltime",
    job_work_type: "in-office",
    job_location: "Banglore",
    salary_per_year: "500000-700000",
  },
  {
    id: 5,
    company: {
      name: "Company 5",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Internship",
    job_work_type: "in-office",
    job_location: "Kenya",
    salary_per_month: "5000",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className="container px-auto max-w-[900px]">
      <div className="flex items-center justify-between mt-4">
        <div
          onClick={() => {
            setActiveTab(1);
          }}
          className={`${
            activeTab === 1 && "text-green-400 bg-green-400/10"
          } w-1/3 text-center bg-gray-500/10 py-3 rounded-s-xl transition-all ease-in-out cursor-pointer`}
        >
          All Applied
        </div>
        <div
          onClick={() => {
            setActiveTab(2);
          }}
          className={`${
            activeTab === 2 && "text-green-400 bg-green-400/10"
          } w-1/3 text-center bg-gray-500/10 py-3 transition-all ease-in-out cursor-pointer`}
        >
          Heard Back
        </div>
        <div
          onClick={() => {
            setActiveTab(3);
          }}
          className={`${
            activeTab === 3 && "text-green-400 bg-green-400/10"
          } w-1/3 text-center bg-gray-500/10 py-3 rounded-e-xl transition-all ease-in-out cursor-pointer`}
        >
          Heard Back
        </div>
      </div>
      {/* <h1 className="mt-4 text-xl font-bold mb-4">Your Applications</h1> */}
      <div className="mt-4">
        {/* card  */}
        {DATA.map((item) => (
          <div
            key={item.id}
            className={`border- border-gray-500/10 bg-gray-500/10 rounded-xl mb-4 p-4`}
          >
            <div className="flex justify-between">
              <div className="w-12 h-12 mb-2">
                <img
                  className="w-12 rounded-xl"
                  src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                  alt=""
                />
              </div>
              {/* <p className="text-xs mt-2 text-gray-500">posted Today</p> */}
              <div className="text-xs mt-2">
                <p className="text-gray-500 mb-2">posted: 12 July 2024</p>
                <p className="text-white font-bold">applied: 15 July 2024</p>
              </div>
            </div>
            <h1 className="font-semibold text-xl mb-1">Frontend Developer</h1>
            <div className="flex gap-4 text-sm">
              <p>{item.company.name}</p>
              {item.job_work_type === "remote" ? (
                <p>Remote</p>
              ) : (
                <p>{item.job_work_type}</p>
              )}
              <p>{item.job_location}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mt-4 "></div>
              <button className="bg-primary py-2 px-5 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out">
                View Application
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
