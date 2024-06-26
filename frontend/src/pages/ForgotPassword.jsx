import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [backup, setBackup] = useState(true)
  

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/api/v1/auth/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Password reset email sent. Check your inbox.\n After reseting ur password Login Again");
      
      
    } catch (error) {
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            setBackup(false)
            setMessage(error.response.data.message);
          } else {
            setMessage("An error occurred. Please try again later.");
          }
      
    }
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center m-auto bg-[url("../img/Bg.jpg")]'>
        <div className="container bg-white flex flex-col md:flex-row rounded-2xl w-3/4">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./img/fp.png"
              alt="Login Image"
              className="w-full md:max-w-lg rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="bg-slate-100 shadow-md rounded-2xl px-8 py-8 mb-1 ">
                {/* dark:bg-gray-800  */}
                {/* Forgot Password */}
                <div className="mb-6 text-4xl text-blue-900 font-semibold text-center ">
                  {/* dark:text-white */}
                  Forgot Password
                </div>

                <div className="mb-4">
                  {/* Email */}
                  <div className="flex items-center mb-4">
                    {/* icon */}
                    <span className="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                      </svg>
                    </span>
                    <input
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                      type="text"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6 flex flex-col gap-4">
                  {/* Reset Password Button */}
                  <button
                    type="submit"
                    // disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    {/* {loading ? "Loading..." : "Reset Password"} */}
                    
                    Reset Password
                  </button>
                </div>
                {/* Go to SignUp Page and Error */}
                <div className="flex flex-col items-center justify-center mb-4">
                  {!backup && <p className="text-center text-gray-500 text-sm">
                    Don't Have An Account?
                    <Link to={"/section"}>
                      <span className="text-blue-600 hover:text-blue-800 ">
                        {/* dark:text-[#fa8a00] */}
                        Sign Up
                      </span>
                    </Link>
                  </p>}

                  {message && (
                    <p className=" text-center text-red-500 mt-5">{message}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
