import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice.js";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";

function LogIn() {
  const [inputValue, setInputValue] = useState("");

  const [pass, setPass] = useState("");

  const { loading, error } = useSelector((state) => state.user);

  const [err, setErr] = useState(null);

  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      dispatch(signInStart());

      const res = await axios.post(
        "/api/v1/auth/login",
        {
          email: inputValue,
          password: pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);

      if (res.success === false) {
        dispatch(signInFailure(res.data));
        setLoad(false);
        setErr(res.data);

        return;
      }

      setLoad(false);
      setErr(null);

      dispatch(signInSuccess(res));

      navigate("/");
    } catch (error) {
      setLoad(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErr(error.response.data);
      } else {
        setErr("Login failed. Please try again later.");
      }
      dispatch(signInFailure(error.response.data));
    }
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center m-auto bg-[url("../img/Bg.jpg")]'>
        <div className="container bg-white flex flex-col md:flex-row rounded-2xl w-3/4">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./img/Login.png"
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
                  Log In
                </div>

                <div className="mb-4">
                  {/* username or email */}
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
                      type="password"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  {/* Forgot Your Password? */}
                  <div className="flex justify-end">
                    <span className="text-xs text-blue-600 ">
                      {/* dark:text-slate-100 */}
                      Forgot Your Password?
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex flex-col gap-4">
                  {/* Log In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    {loading ? "Loading..." : "Log In"}
                  </button>

                  {/* Google Button */}
                  <OAuth />
                </div>
                {/* Go to SignUp Page and Error */}
                <div className="flex flex-col items-center justify-center mb-4">
                  <p className="text-center text-gray-500 text-sm">
                    Don't Have An Account?
                    <Link to={"/signup"}>
                      <span className="text-blue-600 hover:text-blue-800 ">
                        {/* dark:text-[#fa8a00] */}
                        Sign Up
                      </span>
                    </Link>
                  </p>

                  {err && (
                    <p className=" text-center text-red-500 mt-5">{err.data}</p>
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

export default LogIn;
