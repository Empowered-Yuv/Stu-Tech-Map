import React, { useLayoutEffect } from 'react'
//import { useActionData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function LogIn() {

    
    

  return (
    <>
        
        <div className='w-full h-screen flex justify-center items-center m-auto bg-[url("../img/Bg.jpg")]'>
            <div className="container bg-white flex flex-col md:flex-row rounded-2xl w-3/4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="./img/Login.png" alt="Login Image" className="w-full md:max-w-lg rounded-3xl" />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <form className="w-full max-w-md">
                        <div className="bg-slate-100 shadow-md rounded-2xl px-8 py-8 mb-1 ">
                        {/* dark:bg-gray-800  */}
                            <div className="mb-6 text-4xl text-blue-900 font-semibold text-center ">
                            {/* dark:text-white */}
                                Log In</div>
                            <div className="mb-4">
                                {/* <button type="button"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center">
                                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                        </path>
                                    </svg>
                                    Facebook
                                </button> */}
                                <button type="button"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center mt-2">
                                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                        </path>
                                    </svg>
                                    Google
                                </button>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mb-4">
                                    <span className="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input
                                        className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                                        type="text" placeholder="Email" />
                                </div>
                                <div className="flex items-center mb-6">
                                    <span className="w-10 h-10 rounded-l-md flex items-center justify-center bg-gray-200">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input
                                        className="rounded-r-md appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray -400 focus:outline-none focus:ring focus:border-blue-300"
                                        type="password" placeholder="Password" />
                                </div>
                                <div className="flex justify-end">
                                    <a href="#"
                                        className="text-xs text-blue-600 ">
                                            {/* dark:text-slate-100 */}
                                            Forgot Your Password?</a>
                                </div>
                            </div>
                            <div className="mb-6">
                                
                                <button type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                                    Login
                                </button>
                            
                            </div>
                            <p className="text-center text-gray-500 text-sm">

                                Don't Have An Account?
                            <Link to={'/signup'}>
                                <a href=""
                                    className="text-blue-600 hover:text-blue-800 ">
                                        {/* dark:text-[#fa8a00] */}
                                        Sign Up</a></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        

    </>
  )
}

export default LogIn