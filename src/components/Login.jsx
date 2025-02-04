import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="p-5 w-full max-w-md text-center">
        <img
          src="UPswap svg 1.png"
          className="w-52 h-20 mx-auto mb-4"
          alt="logo"
        />

        <div className="bg-white p-8 rounded-xl border-2 shadow-md">
          <p className="text-lg text-fuchsia-800 font-semibold mb-6">
            Login to upswap superadmin panel
          </p>

          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <label
                className="text-sm font-semibold text-gray-700 w-full sm:w-24 text-left sm:text-right"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <label
                className="text-sm font-semibold text-gray-700 w-full sm:w-24 text-left sm:text-right"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <button className="w-full bg-[#FD8A2D] text-white font-semibold py-2 rounded-md hover:bg-[#e07928] transition">
              Login
            </button>
          </form>

          <div className="flex justify-between text-sm text-violet-800 font-semibold mt-4">
            {/* <p className="cursor-pointer">Forgot password ?</p> */}
            {/* <p className="cursor-pointer">Signup</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
