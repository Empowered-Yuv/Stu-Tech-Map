import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (

    <footer className="text-gray-600 body-font bg-[#f8f7fc]">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span> */}
            <img src="../img/LogoF.png" alt="StuTechMap" className="" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Explore And Adapt With Us!
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mx-20">
            <h2 className="title-font font-medium text-[#0c24ff] tracking-widest text-lg mb-3">
              Empowering students to navigate their educational journey with
              confidence and clarity.
            </h2>
            {/* <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav> */}
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10 text-md">
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</a>
              </li>
              {/* <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div> */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10 text-md">
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Terms & Conditions</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Connect With Us!</a>
              </li>
              
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 StuTechMap | All Rights Reserved
            {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 hover:text-gray-900"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 hover:text-gray-900"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className=" w-6 h-6" viewBox="0 0 24 24"
          >
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
  
</svg> */}
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 hover:text-gray-900"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            {/* <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a> */}
          </span>
        </div>
      </div>
    </footer>
  );
}
