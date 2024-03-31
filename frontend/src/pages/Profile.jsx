
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
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                <FontAwesomeIcon icon={faTachometerAlt} className="text-gray-400 mr-5" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                  <FontAwesomeIcon icon={faHome} className="text-gray-400 mr-5" />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 mr-5" />
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 py-3 hover:bg-gray-700 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-5" />
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
        <main className="flex-1 p-6 bg-gray-100">
          {/* Content Header */}
          <header className="bg-white shadow-md mb-6 flex justify-between items-center px-4 py-2">
          {/* Profile Picture */}
          <div className="relative inline-block ml-auto">
            
              <img
                src="https://via.placeholder.com/40"
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
                src="https://via.placeholder.com/800x400"
                alt="Blog Image"
                className="w-64 h-auto rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">Blog Title</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  efficitur vestibulum purus non suscipit. Aliquam erat volutpat.
                  Sed nec elit ac libero aliquam tincidunt. Phasellus condimentum
                  massa sed magna scelerisque placerat. Cras quis tortor sed magna
                  luctus convallis. Proin interdum eros eget magna molestie, eu
                  volutpat odio tristique.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Profile