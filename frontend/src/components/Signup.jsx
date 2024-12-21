import React from "react";

function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-cyberNavy">
        <form
          action=" "
          className="border border-neonMagenta px-6 py-5 rounded-md space-y-4 w-96 shadow-lg shadow-neonCyan"
        >
          <h1 className="text-neonMagenta  text-center font-bold font-montserrat text-3xl neon-font">
            Cy<span className="text-neonCyan">Chat</span>
          </h1>
          <h2 className="text-center text-xl font-roboto text-cyberPink">
            Create a New{" "}
            <span className="text-cyberPink font-semibold">Account!!</span>
          </h2>

          {/* Email */}
          <label className="input input-bordered flex items-center font-raleway gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-cyberNavy opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
              placeholder="Email"
            />
          </label>

          {/* Username */}
          <label className="input input-bordered flex items-center font-raleway gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-cyberNavy opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
              placeholder="Username"
            />
          </label>

          {/* Password */}
          <label className="input input-bordered flex items-center font-raleway  gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-cyberNavy opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2.293a.5.5 0 0 1-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
              placeholder="Password"
            />
          </label>

          {/* Confirm Password */}
          <label className="input input-bordered flex items-center font-raleway gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-cyberNavy opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2.293a.5.5 0 0 1-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow bg-cyberNavy text-cyberNavy placeholder-lavenderBlue"
              placeholder="Confirm Password"
            />
          </label>

          {/*Text and Button*/}
          <div className="text-center space-y-2">
            <input
              type="submit"
              value="Sign Up"
              className="text-cyberNavy bg-neonCyan w-full font-montserrat rounded-md py-1 cursor-pointer hover:bg-neonMagenta font-bold text-lg scale-100 neon-font shadow-md hover:shadow-neonCyan transition duration-300 ease-in-out hover:scale-105"
            />

            <p className="text-neonMagenta font-roboto pt-1">
              Already have an account?{" "}
              <span className="text-lavenderBlue underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
