"use client";
import React, { useEffect, useState } from "react";
import Filters from "@/components/browse/Filters";
import Link from "next/link";

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

interface Job {
  id: number;
  company: {
    name: string;
    image: string;
  };
  job_role: string;
  job_type: string;
  job_work_type: string;
  job_location: string;
  salary_per_month: string;
  salary_per_year: string;
}

const page = () => {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleViewDetails = (id: number) => {
    const job = DATA.find((job) => job.id === id);
    if (job) {
      setActiveJob(job);
    }
  };
  useEffect(() => {
    setActiveJob(DATA[0]);
  }, []);
  return (
    <section className="container mx-auto">
      <Filters />
      <div className="h-[calc(100vh-120px)] grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-4">
        {/* left side  */}
        <div className="pr-4 mb-4 border-r-2 border-gray-500/10 h-full overflow-auto">
          {/* card  */}
          {DATA.map((item) => (
            <div
              key={item.id}
              className={`${
                activeJob?.id === item.id && "border-green-400"
              } border-2 border-gray-500/10 bg-gray-500/10 rounded-xl mb-4 p-4`}
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
                <p className="text-xs mt-2 text-gray-500">12 July 2024</p>
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
              <div className="flex items-center gap-2 mt-4 ">
                <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                  {item.job_type}
                </p>
                {item.job_type === "Internship" ? (
                  <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                    {item.salary_per_month} per month
                  </p>
                ) : (
                  <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                    {item.salary_per_year} per year
                  </p>
                )}
              </div>
              <button
                onClick={() => handleViewDetails(item.id)}
                className="bg-primary w-full mt-4 py-2 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* right side  */}
        <div className="pr-4 overflow-auto">
          <div className="mb-4 p-4 border-2 border-gray-500/10 bg-gray-500/10 rounded-xl ">
            {!activeJob && (
              <p className="text-center mt-8 text-gray-500">
                Browse jobs by clicking View Details
              </p>
            )}
            {activeJob && (
              <div key={activeJob.id}>
                <div className="flex items-center justify-between">
                  <img
                    className="w-12 mb-2 rounded-xl"
                    src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                    alt=""
                  />
                  <p className="text-primary text-sm">posted Today</p>
                </div>
                <h1 className="font-semibold text-xl mb-1">
                  Frontend Developer
                </h1>
                <div className="flex gap-4 text-sm">
                  <p>{activeJob.company.name}</p>
                  {activeJob.job_work_type === "remote" ? (
                    <p>Remote</p>
                  ) : (
                    <p>{activeJob.job_work_type}</p>
                  )}
                  <p>{activeJob.job_location}</p>
                </div>
                <div className="flex activeJobs-center gap-2 mt-4">
                  <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                    {activeJob.job_type}
                  </p>
                  {activeJob.job_type === "Internship" ? (
                    <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                      {activeJob.salary_per_month} per month
                    </p>
                  ) : (
                    <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                      {activeJob.salary_per_year} per year
                    </p>
                  )}
                </div>
                {/* description */}
                <h1 className="mt-4 text-xl font-bold">Description</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  eligendi nobis corporis laboriosam ab quod nemo. Perferendis
                  non quo necessitatibus qui, unde dolorum illum obcaecati
                  cupiditate, excepturi doloribus officiis harum accusamus
                  assumenda facere animi veritatis. Eveniet voluptatem quod
                  maiores, minus pariatur dignissimos natus repellendus harum,
                  necessitatibus alias consequuntur, facilis eos. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Earum explicabo
                  repudiandae, sequi aspernatur consectetur perspiciatis quis
                  animi fuga, facere illum itaque! Ipsam, ab possimus numquam,
                  sequi quaerat temporibus reprehenderit vel soluta
                  perspiciatis, fuga tempora ut sapiente a aut placeat rerum?
                  Rem sint ab nisi dignissimos eos cum, ut sapiente, doloremque
                  enim maiores veniam nam dicta obcaecati repudiandae?
                </p>

                {/* Skills Required */}
                <h1 className="mt-4 text-xl font-bold">Skills Required</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  eligendi nobis corporis laboriosam ab quod nemo. Perferendis
                  non quo necess.
                </p>

                {/* Perks & Benefits
                 */}
                <h1 className="mt-4 text-xl font-bold">Perks & Benefits</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  eligendi nobis corporis laboriosam ab quod nemo. Perferendis
                  non quo necess.
                </p>
                <Link href={`/apply/${activeJob.id}`}>
                  <button
                    onClick={() => handleViewDetails(activeJob.id)}
                    className="bg-primary w-full mt-4 py-2 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out"
                  >
                    Preview & Apply
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
