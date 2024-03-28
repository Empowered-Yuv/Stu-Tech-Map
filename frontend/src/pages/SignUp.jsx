import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import { setAvatar } from "../redux/actions/avatarActions.js";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        avatar: null,
        avatarPreview: null
  });

  // const dispatch = useDispatch();
  // const { avatarPreview } = useSelector((state) => state.avatar);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({ ...formData, avatar: e.target.files[0], avatarPreview: URL.createObjectURL(e.target.files[0]) });
  } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
};

  const handleSubmit = async (e) => {
    e.preventDefault();


    const { fullName, username, email, password, avatar } = formData;
        const formDataToSend = new FormData();
        formDataToSend.append('fullName', fullName);
        formDataToSend.append('username', username);
        formDataToSend.append('email', email);
        formDataToSend.append('password', password);
        formDataToSend.append('avatar', avatar);
    try {
      setLoading(true); // Set loading state to true when submitting the form
      const res = await axios.post("/api/v1/users/signup", formDataToSend, {
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
        <div className="container w-3/4 bg-white m-auto flex flex-col md:flex-row rounded-2xl">
          <div className="first m-auto w-1/2">
            <img src="../img/Sigup.png" alt="" className="h-[598px] mx-10" />
          </div>
          <div className="my-auto hover:shadow-md w-1/2">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col w-full max-w-md px-4 py-4 md:py-2 bg-white rounded-lg border-[0.1px] border-black  sm:px-6 md:px-8 lg:px-10 mx-10">
                {/* dark:bg-gray-800 */}
                {/* SignUp */}
                <div className="self-center text-4xl text-[#002057] font-semibold sm:text-2xl ">
                  {/* dark:text-white */}
                  Sign Up
                </div>

                <div className="m-4">
                  {/* Avatar */}
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <input
                        onChange={handleChange}
                        type="file"
                        //ref={fileRef}
                        accept="image/*"
                        name="avatar"
                        id="imageInput"
                        className="hidden cursor-pointer"
                      />

                      
                      <img
                        onClick={handleImageClick}
                        src={formData.avatarPreview || "../../img/user_profile.png"}
                        alt="profile"
                        className="mx-auto object-cover rounded-lg h-16 w-16 cursor-pointer"
                      />
                    </div>
                  </div>
                  {/* fullName */}
                  <div className="flex flex-col mb-2">
                    <div className="flex relative ">
                      {/* icon of Full Name */}
                      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
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
                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0c24ff] focus:border-transparent"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* username */}
                  <div className="flex flex-col mb-2">
                    <div className="flex relative ">
                      {/* icon of username */}
                      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <img
                          src="./img/user1.png"
                          alt=""
                          className="w-[16px] h-[16px] flex justify-center items-center"
                        />
                      </span>
                      {/* username */}
                      <input
                        type="text"
                        id="username"
                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0c24ff] focus:border-transparent"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="flex flex-col mb-2">
                    <div className="flex relative ">
                      {/* icon of email */}
                      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
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
                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0c24ff] focus:border-transparent"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* password */}
                  <div className="flex flex-col mb-6">
                    <div className="flex relative ">
                      {/* icon of password */}
                      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
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
                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0c24ff] focus:border-transparent"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* SignUp button */}
                  <div className="flex w-full mb-4">
                    <button
                      disabled={loading}
                      type="submit"
                      className="py-2 px-4  bg-[#ff8a00] hover:bg-[#ff7b00] focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      {loading ? "Loading..." : "Sign Up"}
                    </button>
                  </div>
                  {/* SignUp with Google button */}
                  <div className="flex w-full mb-4">
                    <button
                      type="button"
                      className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      Sign Up With Google 
                    </button>
                  </div>
                </div>
                {/* Go to Login Page */}
                <div className="flex items-center justify-center mb-4">
                  {/* dark:text-gray-100 dark:hover:text-white */}
                  <span className="ml-2">
                    Already Have An Account?{" "}
                    <Link to="/login">
                      <span className="text-[#0c24ff]">
                        {/* dark:text-[#fa8a00] */}
                        Log In
                      </span>
                    </Link>
                  </span>
                </div>
                {/* Error */}
                <div className="text-center">
                  {error && <p className="text-red-500 mt-5">{error.data}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

//{"_id":{"$oid":"6604259f97f75b58c6bb7ca8"},"username":"user3","email":"user3@123.com","fullName":"user3","password":"$2b$10$8PJOSCyfYnjykBx2uFXFbO6TqrHZ9k09GRsk7Zi2EwvEgw60Jl4Wi","avatar":"https://res.cloudinary.com/dvxro3ntm/image/upload/v1711547805/fom0dvc1zznym3lhw5sc.jpg","createdAt":{"$date":{"$numberLong":"1711547807035"}},"updatedAt":{"$date":{"$numberLong":"1711547807035"}},"__v":{"$numberInt":"0"}}
