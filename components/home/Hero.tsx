import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="bg-gray-500/10 pb-[8%] pt-[10%] p-8 rounded-xl">
        <div>
          <h1 className="text-5xl mb-6 max-w-[500px]">
            Best platform to find your career
          </h1>
          <p className="max-w-[700px] mb-4 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            excepturi exercitationem harum laboriosam reiciendis hic.
          </p>
          <div>
            <input
              placeholder="Role"
              className="h-12 outline-none border border-gray-500/50 bg-gray-500/50 px-4 rounded-s-xl"
              type="text"
            />
            <input
              placeholder="Location or Remote"
              className="h-12 outline-none border border-gray-500/50 bg-gray-500/50 px-4"
              type="text"
            />
            <Link href={"/browse"}>
              <button className="bg-primary text-black px-4 h-12 rounded-e-xl mt-4">
                Browse
              </button>
            </Link>
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
