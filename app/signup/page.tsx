"use client";
import { IconBrandGoogle, IconBrandGoogleFilled } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  // step 1
  const [role, setRole] = useState<string>("");
  const [stepNum, setStepNum] = useState<number>(1);

  const handleGoToStep2 = () => {
    if (!role) {
      return alert("Role required");
    }
    alert(role);
    setStepNum(2);
  };

  //step 2
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      return alert("All fields are required");
    }
    alert(name + email + password);
    toast.success("Signed up Successfully");
    router.push("/setup-profile");
  };
  return (
    <div className="container mx-auto pt-8">
      <div className="bg-gray-500/10 rounded-xl p-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {/* step 1 start */}
            {stepNum === 1 && (
              <div>
                <h1 className="mb-4 text-xl font-semibold">
                  What is your Role?
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                  <div
                    onClick={() => setRole("job-seeker")}
                    className={`${
                      role === "job-seeker"
                        ? "border"
                        : "border border-transparent"
                    } w-1/2 bg-gray-500/10 p-10 rounded-xl text-center font-bold cursor-pointer`}
                  >
                    I am here for job
                  </div>
                  <div
                    onClick={() => setRole("employer")}
                    className={`${
                      role === "employer"
                        ? "border"
                        : "border border-transparent"
                    } w-1/2 bg-gray-500/10 p-10 rounded-xl text-center font-bold cursor-pointer`}
                  >
                    I want to hire talent
                  </div>
                </div>
                <div className="flex justify-between">
                  <div></div>
                  {/* <button
                    onClick={handleGoToStep2}
                    className="mt-4 bg-gray-500 py-2 px-6 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out"
                  >
                    Back
                  </button> */}
                  <button
                    onClick={handleGoToStep2}
                    className="mt-4 bg-primary py-2 px-6 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {/* step 1 end  */}

            {/* step 2 start */}
            {stepNum === 2 && (
              <div>
                <h1 className="mb-4 text-xl font-semibold">
                  Create your Account
                </h1>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 mb-4 bg-gray-500/10 rounded-lg px-4"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 mb-4 bg-gray-500/10 rounded-lg px-4"
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 mb-4 bg-gray-500/10 rounded-lg px-4"
                  type="password"
                  placeholder="Password"
                />
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-10 mb-4 bg-gray-500/10 rounded-lg px-4"
                  type="password"
                  placeholder="Confirm Password"
                />
                <button
                  onClick={handleSignup}
                  className="w-full text-center bg-primary py-2 px-6 rounded-xl text-black hover:bg-gray-500 transition-all ease-in-out"
                >
                  Sign Up
                </button>
                {/* <p className="uppercase text-center text-xs my-4">or</p>
                <button className="flex items-center justify-center w-full text-center bg-gray-100 py-2 px-6 rounded-xl text-black transition-all ease-in-out">
                  Sign Up with Google
                  <img
                    className="rounded-full w-8"
                    src="https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg"
                    alt=""
                  />
                </button> */}
              </div>
            )}
            {/* step 2 end  */}
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
