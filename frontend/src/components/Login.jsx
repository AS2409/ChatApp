import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import toast from "react-hot-toast";

export default function Login() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate(); // Initialize the navigate function

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Login successful!");
        }

        localStorage.setItem("messenger", JSON.stringify(response.data));
        setAuthUser(response.data); // Set global auth data

        // Redirect to another page (use a relative path or full URL)
        navigate("/"); // Redirect to the desired page after login
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center bg-cyberNavy">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-neonMagenta px-6 py-5 rounded-md space-y-4 w-96 shadow-lg shadow-neonCyan"
          >
            <h1 className="text-neonMagenta text-center font-bold font-montserrat text-3xl neon-font">
              Cy<span className="text-neonCyan">Chat</span>
            </h1>
            <h2 className="text-center text-xl font-roboto text-cyberPink">
              Login with your{" "}
              <span className="text-cyberPink font-semibold">Account!</span>
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
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Password */}
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
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/*Text and Button*/}
            <div className="text-center space-y-2">
              <input
                type="submit"
                value="Login"
                className="text-cyberNavy bg-neonCyan w-full font-montserrat rounded-md py-1 cursor-pointer hover:bg-neonMagenta font-bold text-lg scale-100 neon-font shadow-md hover:shadow-neonCyan transition duration-300 ease-in-out hover:scale-105"
              />

              <p className="text-neonMagenta font-roboto pt-1">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-lavenderBlue underline cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
