// Dashboard.js

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

function DashBoard() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    // <div className="flex bg-gray-100">
    //   {/* Sidebar */}
    //   <aside className="bg-gray-800 text-gray-200 w-64 min-h-screen flex flex-col">
    //     {/* Sidebar Header */}
    //     <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-700">
    //       <h1 className="text-lg font-semibold">Dashboard</h1>
    //     </div>
    //     {/* Sidebar Links */}
    //     <nav className="flex-1 overflow-y-auto">
    //       <ul className="py-4">
    //         <li>
    //           <a href="#" className="block px-6 py-3 hover:bg-gray-700">
    //             Profile
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block px-6 py-3 hover:bg-gray-700">
    //             Courses
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block px-6 py-3 hover:bg-gray-700">
    //             Grades
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     {/* Sidebar Footer */}
    //     <div className="h-16 bg-gray-900 flex items-center justify-center border-t border-gray-700">
    //       <a href="#" className="text-sm font-semibold">
    //         Logout
    //       </a>
    //     </div>
    //   </aside>

    //   {/* Main Content */}
    //   <main className="flex-1 p-6 bg-[#ff8a00]">
    //     {/* Content Header */}
    //     <header className="bg-white shadow-md mb-6 flex justify-between items-center px-4 py-2">
    //       {/* Profile Picture */}
    //       <div className="relative inline-block ml-auto">
    //         <button
    //           onClick={toggleDropdown}
    //           className="focus:outline-none"
    //         >
    //           <img
    //             src="https://via.placeholder.com/40"
    //             alt="Profile"
    //             className="w-10 h-10 rounded-full cursor-pointer"
    //           />
    //         </button>
    //         {/* Dropdown Menu */}
    //         {isDropdownOpen && (
    //           <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md" id="dropdownMenu">
    //             <ul>
    //               <li>
    //                 <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200 w-full text-left">Update Profile</a>
    //               </li>
    //               <li>
    //                 <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200 w-full text-left">Logout</a>
    //               </li>
    //             </ul>
    //           </div>
    //         )}
    //       </div>
    //     </header>
    //     {/* Content Body */}
    //     <div className="bg-white shadow-md rounded-lg p-6">
    //       <h2 className="text-lg font-semibold mb-4">Blogs</h2>
    //       {/* Blog Item */}
    //       <div className="bg-gray-200 p-4 rounded-lg flex items-start space-x-4">
    //         <img
    //           src="https://via.placeholder.com/800x400"
    //           alt="Blog Image"
    //           className="w-64 h-auto rounded-lg"
    //         />
    //         <div>
    //           <h3 className="text-lg font-semibold mb-2">Blog Title</h3>
    //           <p className="text-gray-500">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
    //             efficitur vestibulum purus non suscipit. Aliquam erat volutpat.
    //             Sed nec elit ac libero aliquam tincidunt. Phasellus condimentum
    //             massa sed magna scelerisque placerat. Cras quis tortor sed magna
    //             luctus convallis. Proin interdum eros eget magna molestie, eu
    //             volutpat odio tristique.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-gray-200 w-64 min-h-screen flex flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-700">
            <FontAwesomeIcon icon={faTachometerAlt} className="text-white mr-2" />
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          {/* Sidebar Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
            <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                  <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-5" />
                  Profile
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-gray-400 mr-5"
                  />
                  Home
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                <Link to="/about">
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-gray-400 mr-5"
                  />
                  About
                  </Link>
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                <Link to="/contact">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 mr-5"
                  />
                  Contact
                  </Link>
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
        <main className="flex-1 p-6 bg-gray-100">
          {/* Content Header */}
          <header className="bg-white shadow-md mb-6 flex justify-between items-center px-4 py-2">
          {/* Profile Picture */}
          <div className="relative inline-block ml-auto">
            
              <img
                src="../../img/Mentor.png"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              
              {/* Dropdown Menu */}
            </div>
          </header>
          {/* Content Body */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Blogs</h2>
            {/* Blog Item */}
            <div className="bg-gray-200 p-4 rounded-lg flex items-start space-x-4">
              <img
                src="../../img/arvr.jpg"
                alt="Blog Image"
                className="w-64 h-auto rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">AR VR</h3>
                <p className="text-gray-500">
                As AR and VR technologies continue to mature, they hold the potential to fundamentally transform how we work, learn, play, and connect with each other in the digital age. Whether it's enhancing our reality with useful information or transporting us to entirely new worlds, AR and VR are reshaping the boundaries of human experience and opening up exciting possibilities for the future.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default DashBoard;
