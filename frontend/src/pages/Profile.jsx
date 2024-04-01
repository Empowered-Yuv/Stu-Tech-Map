import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHome,
  faInfoCircle,
  faEnvelope,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-gray-200 w-64 min-h-screen flex flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-700">
            <FontAwesomeIcon icon={faUser} className="text-white mr-5" />
            <h1 className="text-lg font-semibold">Profile</h1>
          </div>
          {/* Sidebar Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-gray-700 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    className="text-gray-400 mr-5"
                  />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-gray-700 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-gray-400 mr-5"
                  />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-gray-700 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-gray-400 mr-5"
                  />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 hover:bg-gray-700 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 mr-5"
                  />
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Sidebar Footer */}
          <div className="h-16 bg-gray-900 flex items-center justify-center border-t border-gray-700">
            <a href="#" className="text-sm font-semibold flex items-center">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main class='flex-1 p-6 bg-[url("../img/Bg.jpg")]'>
          <div class="w-full h-screen flex justify-center items-center m-auto ">
            <div class="container bg flex flex-col md:flex-row rounded-2xl w-3/4">
              <form
                class="w-full max-w-md m-auto"
                //onSubmit={handleSubmit}
              >
                <div class="bg-white shadow-md rounded-2xl px-8 py-8 mb-1">
                  <div class="mb-6 text-4xl text-blue-900 font-semibold text-center ">
                    Update Profile
                  </div>

                  <div class="mb-4">
                    <div class="flex items-center mb-4">
                      <input
                        //onChange={handleChange}
                        type="file"
                        accept="image/*"
                        name="avatar"
                        id="imageInput"
                        class="hidden cursor-pointer items-center"
                      />

                      <img
                        alt="profile"
                        src="./images/user1.png"
                        class="mx-auto object-cover rounded-full h-16 w-16 cursor-pointer"
                      />
                    </div>

                    <div class="flex items-center mb-4">
                      <span class="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                        <img
                          src="./images/user1.png"
                          alt=""
                          class="w-[16px] h-[16px] flex justify-center items-center"
                        />
                      </span>

                      <input
                        type="text"
                        id="username"
                        class="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Username"
                        //onChange={handleChange}
                        required
                      />
                    </div>

                    <div class="flex items-center mb-4">
                      <span class="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
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
                        type="email"
                        id="email"
                        class="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Email"
                        //onChange={handleChange}
                        required
                      />
                    </div>

                    <div class="flex items-center mb-4">
                      <span class="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
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
                        type="password"
                        id="password"
                        class="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Password"
                        //onChange={handleChange}
                        required
                      />
                    </div>

                    <div class="mb-6 flex flex-col gap-4">
                      <button
                        //disabled={loading}
                        type="submit"
                        class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
