"use client";
import React from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

const page = () => {
  const { id } = useParams();

  const handleSendApplication = () => {
    toast.success("Applied successfully!");
  };
  return (
    <div className="container mx-auto mb-8">
      <h1 className="mt-8 text-xl font-bold">
        Preview Resume and Apply in this job.
      </h1>
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        <div className="w-1/2 min-h-[600px] bg-gray-500/10 rounded-2xl text-black p-4 flex flex-col gap-4 items-center justify-center">
          Upload your Resume
          <button className="bg-primary w-full mt-4 py-2 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out">Upload</button>
        </div>
        <div className="w-1/2 max-w-[400px]">
          <h1 className="mb-8">
            Is this resume good? <span className="text-primary">Change</span>
          </h1>
          <div className="mb-1">
            <h1 className="text-xl font-bold mb-1">
              Your Recent similar Job / Internship
            </h1>
            <label htmlFor="role">Role</label>
            <input
              id="role"
              className="mb-2 w-full h-10 rounded-xl bg-gray-500/30 outline-none px-4"
              type="text"
            />
            <label htmlFor="company">Company</label>
            <input
              id="company"
              className=" w-full h-10 rounded-xl bg-gray-500/30 outline-none px-4"
              type="text"
            />
          </div>
          <button
            onClick={handleSendApplication}
            className="bg-primary w-full mt-4 py-2 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out"
          >
            Send Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
