import React from "react";
import Filters from "@/components/browse/Filters";

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
    job_location: "Pune",
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
    job_location: "",
  },
  {
    id: 3,
    company: {
      name: "Company 3",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Internship",
    job_work_type: "in-office",
    job_location: "",
  },
  {
    id: 4,
    company: {
      name: "Company 4",
      image:
        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
    },
    job_role: "Backend Web Developer",
    job_type: "Internship",
    job_work_type: "in-office",
    job_location: "",
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
    job_location: "",
  },
];

const page = () => {
  return (
    <section className="container mx-auto">
      <Filters />
      <div className="h-[calc(100vh-120px)] grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-4">
        <div className="pr-4 mb-4 border-r-2 border-gray-500/10 h-full overflow-auto">
          {/* card  */}
          {DATA.map((item) => (
            <div
              key={item.id}
              className="border-2 border-gray-500/10 bg-gray-500/10 rounded-xl mb-4 p-4"
            >
              <img
                className="w-12 mb-2 rounded-xl"
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt=""
              />
              <h1 className="font-semibold text-xl mb-1">Frontend Developer</h1>
              <div className="flex gap-4 text-sm">
                <p>Company Name</p>
                <p>Location</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                  Internship
                </p>
                <p className="border-2 border-green-500/10 rounded-xl px-3 py-1">
                  5000
                </p>
              </div>
              <button className="bg-primary w-full mt-4 py-2 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out">
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 mb-4 border-2 border-gray-500/10 bg-gray-500/10 rounded-xl">
          right
        </div>
      </div>
    </section>
  );
};

export default page;
