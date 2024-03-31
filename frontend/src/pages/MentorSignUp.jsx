import React, { useState } from "react";
import OAuth from "../components/OAuth.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function MentorSignUp() {


  const [formData, setFormData] = useState({
    fullName: "",
    expertise: "",
    bio: "",
    email: "",
    password: "",
    avatar: null,
    avatarPreview: null,
  });

  

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData({
        ...formData,
        avatar: e.target.files[0],
        avatarPreview: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, expertise, bio, email, password, avatar } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", fullName);
    formDataToSend.append("expertise", expertise);
    formDataToSend.append("bio", bio);
    formDataToSend.append("email", email);
    formDataToSend.append("password", password);
    formDataToSend.append("avatar", avatar);
    try {
      setLoading(true); // Set loading state to true when submitting the form
      const res = await axios.post("/api/v1/mentors/signup", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Remove .data from res
      console.log(res);

      if (res.success === false) {
        setLoading(false);
        setError(res.data);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data);
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };




  return (
    <>
      <div className='w-full h-screen flex justify-center items-center m-auto bg-[url("../img/Bg.jpg")]'>
        <div className="container bg-white flex flex-col md:flex-row rounded-2xl w-3/4">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/Sigup.png"
              alt=""
              className="w-full md:max-w-lg rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="bg-slate-100 shadow-md rounded-2xl px-8 py-8 mb-1">
                {/* dark:bg-gray-800 */}
                {/* SignUp */}
                <div className="mb-6 text-4xl text-blue-900 font-semibold text-center ">
                  {/* dark:text-white */}
                  Sign Up
                </div>

                <div className="mb-4">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <input
                      onChange={handleChange}
                      type="file"
                      //ref={fileRef}
                      accept="image/*"
                      name="avatar"
                      id="imageInput"
                      className="hidden cursor-pointer items-center"
                    />

                    <img
                      onClick={handleImageClick}
                      src={formData.avatarPreview || "../../img/Mentor.png"}
                      alt="profile"
                      className="mx-auto object-cover rounded-full h-16 w-16 cursor-pointer"
                    />
                  </div>
                  {/* fullName */}
                  <div className="flex items-center mb-4">
                    {/* icon of Full Name */}
                    <span className="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                      <img
                        src="./img/Name.png"
                        alt=""
                        className="w-[16px] h-[16px] flex justify-center items-center"
                      />
                    </span>
                    {/* fullName */}
                    <input
                      type="text"
                      id="fullName"
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Expertise */}
                  <div className="flex items-center mb-4">
                    {/* icon of expertise */}
                    <span className="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                      <img
                        src="./img/user1.png"
                        alt=""
                        className="w-[16px] h-[16px] flex justify-center items-center"
                      />
                    </span>
                    {/* Expertise */}
                    <input
                      type="text"
                      id="expertise"
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Expertise"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Bio */}
                  <div className="flex items-center mb-4">
                    {/* icon of Bio */}
                    <span className="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                      <img
                        src="./img/user1.png"
                        alt=""
                        className="w-[16px] h-[16px] flex justify-center items-center"
                      />
                    </span>
                    {/* Bio */}
                    <input
                      type="text"
                      id="bio"
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Bio"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* email */}
                  <div className="flex items-center mb-4">
                    {/* icon of email */}
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
                    {/* email */}
                    <input
                      type="email"
                      id="email"
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* password */}
                  <div className="flex items-center mb-4">
                    {/* icon of password */}
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
                    {/* password */}
                    <input
                      type="password"
                      id="password"
                      className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* SignUp button */}
                  <div className="mb-6 flex flex-col gap-4">
                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      {loading ? "Loading..." : "Sign Up"}
                    </button>
                    {/* SignUp with Google button */}
                    <OAuth />
                  </div>

                  {/* Go to Login Page And Error*/}
                  <div className="flex flex-col items-center justify-center mb-4">
                    {/* dark:text-gray-100 dark:hover:text-white */}
                    <p className="text-center text-gray-500 text-sm">
                      Already Have An Account?{" "}
                      <Link to="/login">
                        <span className="text-[#0c24ff]">
                          {/* dark:text-[#fa8a00] */}
                          Log In
                        </span>
                      </Link>
                    </p>

                    {error && (
                      <p className=" text-center text-red-500 mt-5">
                        {error.data}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorSignUp;
