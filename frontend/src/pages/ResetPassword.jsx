import React, { useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function ResetPassword() {

  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`/api/v1/auth/reset-password/${token}`, {
        token,
        password
      });
      setMessage('Password reset successful');
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again later.');
    }
  };


  return (
    <>
      <div className='w-full h-screen flex justify-center items-center m-auto bg-[url("../img/Bg.jpg")]'>
        <div className="container bg-white flex flex-col md:flex-row rounded-2xl w-3/4">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./img/rp.png"
              alt="Login Image"
              className="w-full md:max-w-lg rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="bg-slate-100 shadow-md rounded-2xl px-8 py-8 mb-1 ">
                {/* dark:bg-gray-800  */}
                {/* Log In */}
                <div className="mb-6 text-4xl text-blue-900 font-semibold text-center ">
                  {/* dark:text-white */}
                  Reset Password
                </div>

                <div className="mb-4">
                  {/* password */}
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
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                      </svg>
                    </span>
                    <input
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray -400 focus:outline-none focus:ring focus:border-blue-300"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  {/*confirm password */}
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
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                      </svg>
                    </span>
                    <input
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray -400 focus:outline-none focus:ring focus:border-blue-300"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      onChange={handleConfirmPasswordChange}
                      required
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    {/* show password */}

                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={handleCheckboxChange}
                      id="check"
                      className="ms-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="check"
                      className="ms-2 text-sm font-medium text-gray-600"
                    >
                      Show Password
                    </label>
                  </div>
                 
                  
                </div>
                <div className="mb-6 flex flex-col gap-4">
                  {/* Reset Password Button */}
                  <button
                    type="submit"
                    // disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    {/* {loading ? "Loading..." : "Log In"} */}
                    Reset Password
                  </button>
                </div>
                {/* Go to SignUp Page and Error */}
                <div className="flex flex-col items-center justify-center mb-4">
                  <p className="text-center text-gray-500 text-sm">
                    Don't Have An Account?
                    <Link to={"/section"}>
                      <span className="text-blue-600 hover:text-blue-800 ">
                        {/* dark:text-[#fa8a00] */}
                        Sign Up
                      </span>
                    </Link>
                  </p>

                  {/* {err && (
                    <p className=" text-center text-red-500 mt-5">{err.data}</p>
                  )} */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
