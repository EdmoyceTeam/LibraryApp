import React from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import Logo from "../assets/images/Logo.png";
import Logo1 from "../assets/images/Logo1.png";

const Landing = () => {
  return (
    <PagesLayouts>
      <div className="flex items-center justify-center min-h-screen bg-gray-600">
        <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="w-1/2 bg-gray-800 text-white flex flex-col items-center justify-center p-8">
            <div className="flex flex-col items-center">
              <div className="mb-4 p-4">
                <img src={Logo} alt="Logo" className="" />
              </div>
              <h1 className="text-3xl font-semibold">EDMOYCE</h1>
              <p className="text-sm mt-1">LIBRARY</p>
              <p className="mt-4 text-center">
                "Our premier digital library for managing book resources"
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-white p-10 flex flex-col justify-center rounded-l-4xl">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img src={Logo1} alt="Logo" className="rounded-full " />
              </div>
              <h2 className="text-2xl text-gray-800 font-bold">Welcome Back</h2>
              <p className="text-sm text-gray-500 mt-1">
                Please enter your credentials to login
              </p>
            </div>
            <form className="mt-6">
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Username"
                  className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder=" Password"
                  className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="text-gray-800">Forgot Password</button>
              </div>
              <button className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold hover:bg-black">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </PagesLayouts>
  );
};

export default Landing;
