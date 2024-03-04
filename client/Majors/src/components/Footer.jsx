import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Footer() {
  return (
    // <footer className="bg-[#f7f8fc] border-y w-full z-50">
    //   <div className="mx-auto w-full p-4 py-6 lg:py-8">
    //     <div className="md:flex md:justify-between">
    //       <div className="mb-6 md:mb-0">
    //         <Link to="/" className="flex items-center">
    //           <img
    //             src="../img/revised_asset_2.png"
    //             className="w-1/3 md:w-1/6 object-cover flex items-center"
    //             alt="Logo"
    //           />
    //         </Link>
    //       </div>
    //       <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Company
    //           </h2>
    //           <ul className="text-gray-500 font-medium">
    //             <li className="mb-4">
    //               <NavLink
    //                 to="/"
    //                 className={({ isActive }) =>
    //                   `block duration-200 ${
    //                     isActive ? "text-[#ff8a00]" : "text-slate-700"
    //                   } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#e87d02] lg:p-0`
    //                 }
    //               >
    //                 Home
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink
    //                 to="/about"
    //                 className={({ isActive }) =>
    //                   `block duration-200 ${
    //                     isActive ? "text-orange-700" : "text-gray-500"
    //                   } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    //                 }
    //               >
    //                 About
    //               </NavLink>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Follow us
    //           </h2>
    //           <ul className="text-gray-500 font-medium">
    //             <li className="mb-4">
    //               <a
    //                 href="https://github.com/Empowered-Yuv"
    //                 className="hover:underline"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 Github
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://linkedin.com/in/yuv-kesarwani-632191215"
    //                 className="hover:underline"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 LinkedIn
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Legal
    //           </h2>
    //           <ul className="text-gray-500 font-medium">
    //             <li className="mb-4">
    //               <Link to="#" className="hover:underline">
    //                 Privacy Policy
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="#" className="hover:underline">
    //                 Terms &amp; Conditions
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <span className="text-sm text-gray-500 sm:text-center">
    //         © 2024
    //         <a href="#" className="hover:underline">
    //           Empowered-Yuv
    //         </a>
    //         . All Rights Reserved.
    //       </span>
    //       <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
    //         <Link to="#" className="text-gray-500 hover:text-gray-900">
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 8 19"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">Facebook page</span>
    //         </Link>
    //         <Link to="#" className="text-gray-500 hover:text-gray-900">
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 21 16"
    //           >
    //             <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
    //           </svg>
    //           <span className="sr-only">Discord community</span>
    //         </Link>
    //         <Link to="#" className="text-gray-500 hover:text-gray-900">
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 17"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">Twitter page</span>
    //         </Link>
    //         <Link to="#" className="text-gray-500 hover:text-gray-900">
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">GitHub account</span>
    //         </Link>
    //         <Link to="#" className="text-gray-500 hover:text-gray-900">
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">Dribbble account</span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="text-gray-600 body-font bg-[#f8f7fc]">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span> */}
        <img src="../img/LogoF.png" alt="StuTechMap" className="" />
      </a>
      <p className="mt-2 text-sm text-gray-500">Explore And Adapt With Us!</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
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
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 StuTechMap | All Rights Reserved
        {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 hover:text-gray-900" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 hover:text-gray-900" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className=" w-6 h-6" viewBox="0 0 24 24"
          >
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
  
</svg> */}



        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 hover:text-gray-900" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        {/* <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
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
