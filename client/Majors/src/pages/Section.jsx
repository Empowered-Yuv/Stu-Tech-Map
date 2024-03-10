import React from 'react'
import { Link } from 'react-router-dom'

function Section() {
  return (
    <>
    <div class="container h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#ff8a00]">
    <h2 class="text-white font-bold text-3xl mb-8">Log In as a Mentor/Student</h2>
    <div class="flex space-x-8">
        <Link to='/signup'>
        <a href="Signup.html" class="option-link">
           
            <div class="option rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 transition duration-300 flex flex-col justify-center items-center p-4">
                <p class="option-title bg-orange-500 text-white font-bold text-2xl rounded-t-2xl py-2 px-4">Student</p>
                <img src="./img/Learners.png" alt="Student" class="w-32 h-32 mt-4" />
            </div>
        </a>
        </Link>
        

        <Link to='/signup'>
        <a href="Signup.html" class="option-link">
            <div class="option rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 transition duration-300 flex flex-col justify-center items-center p-4">
                <p class="option-title bg-orange-500 text-white font-bold text-2xl rounded-t-2xl py-2 px-4">Mentor</p>
                <img src="./img/Mentor.png" alt="Mentor" class="w-32 h-32 mt-4" />
            </div>
        </a>
        </Link>
    </div>
</div>
    </>
  )
}

export default Section