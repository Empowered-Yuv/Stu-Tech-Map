import React from 'react'
import { Link } from 'react-router-dom'

function Section() {
  return (
    <>
    {/* <div className="container h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#ff8a00]">
    <h2 className="text-white font-bold text-3xl mb-8">Log In as a Mentor/Student</h2>
    <div className="flex space-x-8">
        <Link to='/signup'>
        <a href="Signup.html" className="option-link">
           
            <div className="option rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 transition duration-300 flex flex-col justify-center items-center p-4">
                <p className="option-title bg-orange-500 text-white font-bold text-2xl rounded-t-2xl py-2 px-4">Student</p>
                <img src="./img/Learners.png" alt="Student" className="w-32 h-32 mt-4" />
            </div>
        </a>
        </Link>
        

        <Link to='/signup'>
        <a href="Signup.html" className="option-link">
            <div className="option rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 transition duration-300 flex flex-col justify-center items-center p-4">
                <p className="option-title bg-orange-500 text-white font-bold text-2xl rounded-t-2xl py-2 px-4">Mentor</p>
                <img src="./img/Mentor.png" alt="Mentor" className="w-32 h-32 mt-4" />
            </div>
        </a>
        </Link>
    </div>
</div> */}
<div className=" h-screen w-full flex flex-col justify-center items-center bg-[url('../img/Bg.jpg')]">
    <h2 className="text-white font-bold text-3xl md:text-6xl mb-8">Log in as a Mentor/Student</h2>
    <div className="flex space-x-8">
    
        <a href="#" className="option-link">
        <Link to={'/signup'}>
            <div className="option rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 transition duration-300 flex flex-col justify-center items-center p-4">
                <p className="option-title bg-orange-500 text-white font-bold text-2xl rounded-t-2xl py-2 px-4">Student</p>
                <img src="../img/Learners.png" alt="Student" className="w-32 h-32 mt-4" />
            </div>
        </Link>
    
        </a>
        
        
        <a href="#" className="option-link">
            <Link to={'/signup'}>
            <div className="option rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 transition duration-300 flex flex-col justify-center items-center p-4">
                <p className="option-title bg-orange-500 text-white font-bold text-2xl rounded-t-2xl py-2 px-4">Mentor</p>
                <img src="../img/Mentor.png" alt="Mentor" className="w-32 h-32 mt-4" />
            </div>
            </Link>
        </a>
    </div>
</div>
    </>
  )
}

export default Section