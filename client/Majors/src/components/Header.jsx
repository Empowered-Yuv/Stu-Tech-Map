import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [change, setChange] = useState(false);

  return (
    <header className="shadow-md w-full sticky top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-[#f7f8fc] py-4 md:px-10 px-7">
        <img
          className="w-1/3 md:w-1/6 object-cover "
          src="../img/revised_asset_2.png"
          alt="profile"
        />

        {/* <form
          action=""
          // onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center mx-auto"
        >
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
      <FaSearch className="text-slate-600" />
       </form> */}

        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setChange(!change)}
        >
          <ion-icon name={change ? "close" : "grid"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-[#f7f8fc] ${
            change ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 `}
        >
        

          <li className="md:ml-8 md:my-0 my-7 md:inline text-slate-900 font-semibold text-xl hover:underline duration-500 ">
          <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#ff7b00]" : "text-slate-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* isActive url se detect krta hai */}
                                    Home
                                </NavLink>
          </li>
          
          
          <li className="md:ml-8 md:my-0 my-7 md:inline text-slate-900 font-semibold text-xl hover:underline duration-500">
            
            <NavLink to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#ff7b00]" : "text-slate-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* isActive url se detect krta hai */}
                                    About
                                </NavLink>
          </li>
          
          {/* <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign In</li>
            )}
          </Link> */}
          
          <li className="md:ml-8 md:my-0 my-7 md:inline text-slate-900 font-semibold text-xl hover:underline duration-500">
          <NavLink to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#ff7b00]" : "text-slate-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* isActive url se detect krta hai */}
                                    Contact
                                </NavLink>
          </li>
          
          <li className="md:ml-8 md:my-0 my-7 md:inline text-slate-900 font-semibold text-xl hover:underline duration-500">
            Admin
          </li>

          <li className="md:ml-8 md:my-0 my-7 md:inline text-slate-900 font-semibold text-xl hover:underline duration-500">
            Resources
          </li>

          {/* <button className="bg-[#ff8a00] text-sm p-2 w-[90px] border rounded-lg md:w-[120px] md:text-lg font-semibold h-[57px] text-white md:ml-8">
          Get Started
        </button>


        <button className="bg-[#0c24ff] text-sm p-2 w-[90px] border rounded-lg md:w-[120px]  md:text-lg  font-semibold h-[57px] text-white md:ml-8">
          Login
        </button> */}

          <div
            className="flex
         gap-4 md:ml-8 flex-col md:flex-row"
          >
            <Link to='/section'>
            <button className="bg-[#ff8a00] text-sm p-2 w-[90px] border rounded-lg md:w-[120px] md:text-lg font-semibold h-[57px] text-white hover:bg-[#ff7b00]">
              Get Started
            </button>
            </Link>
            <Link to='/login'>
            <button className="bg-[#0c24ff] text-sm p-2 w-[90px] border rounded-lg md:w-[120px]  md:text-lg  font-semibold h-[57px] text-white hover:opacity-80">
              Login
            </button>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
