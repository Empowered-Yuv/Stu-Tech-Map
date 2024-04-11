import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useSelector } from "react-redux";

import { Link, ScrollRestoration } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(false);

  const { currentUser } = useSelector((state) => state.user)

  

  return (
    <>

    <ScrollRestoration />
    
      <section className="text-gray-600 body-font m-2 p-2">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 pl-2 sm:pl-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-7xl text-4xl mb-8  font-semibold tracking-wide text-[#002057]">
              Discover, Adapt
              <br className="hidden lg:inline-block" />{" "}
              <span className="text-[#ff7b00]">& Thrive!</span>
            </h1>
            <p className="mb-8 leading-relaxed text-2xl font-medium tracking-wide">
              Empowering students to navigate their academic journey with ease,{" "}
              <span className="text-[#0c24ff] font-semibold">StuTechMap</span>{" "}
              offers personalized resources and expert advice on career
              planning, study skills, mental health, and more.
            </p>
            <div className="flex justify-center">
              {currentUser ?  null : (<Link to="/section">
              <button className="inline-flex text-white bg-[#ff8a00] border-0 py-2 px-6 focus:outline-none hover:bg-[#ff7b00] rounded-lg text-lg">
                Get Started
              </button>
              </Link>) }
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="../img/frontpag.webp"
            />
          </div>
        </div>
      </section>

      {/* counter stats */}

      <section className="text-gray-600 bg-gradient-to-b from-white to-[#ff8a00]">
        {/* <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)} > */}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-7xl text-3xl font-semibold title-font mb-4 text-[#002057]">What We Earn?</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl tracking-wide font-medium">
                We Have Earned <b className="text-[#ff8a00] font-semibold">Trust</b> And Becoming The Most Trusted Platform To Empower And Guide <b className="text-[#ff8a00] font-semibold">Students</b> In India With Hundreds Of Proud <b className="text-[#ff8a00] font-semibold">Mentors</b>.
              </p>
            </div>
            <div className="flex flex-wrap m-4 text-center">

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">

                <div className=" bg-white px-4 py-6 rounded-lg hover:border-[#0c24ff] border-[1px] border-white">


                  <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)} >

                  <img src="../img/Learners.png" alt="" className="w-20 h-20 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-[#0c24ff]">{count && <CountUp start={0} end={10000} duration={2} delay={0} />}<span>+</span></h2>
                  <p className="leading-relaxed text-[#ff8a00] font-semibold text-xl">Happy Learners</p>
                  </ScrollTrigger>

                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" bg-white px-4 py-6 rounded-lg hover:border-[#0c24ff] border-[1px] border-white">
                  {/* <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)} > */}
                  <img src="../img/Mentor.png" alt="" className="w-20 h-20 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-[#0c24ff]">{count && <CountUp start={0} end={3000} duration={2} delay={0} />}<span>+</span></h2>
                  <p className="leading-relaxed text-[#ff8a00] font-semibold text-xl">Proud Mentors</p>
                  {/* </ScrollTrigger> */}
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" bg-white px-4 py-6 rounded-lg hover:border-[#0c24ff] border-[1px] border-white">
                  {/* <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)} > */}
                  <img src="../img/Roadmap.png" alt="" className="w-20 h-20 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-[#0c24ff]">{count && <CountUp start={0} end={1500} duration={2} delay={0} />}<span>+</span></h2>
                  <p className="leading-relaxed text-[#ff8a00] font-semibold text-xl">Strategic Roadmaps</p>
                  {/* </ScrollTrigger> */}
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className=" bg-white px-4 py-6 rounded-lg hover:border-[#0c24ff] border-[1px] border-white">
                  {/* <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)} >  */}
                  <img src="../img/Blog.png" alt="" className="w-20 h-20 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-[#0c24ff]">{count && <CountUp start={0} end={2000} duration={2} delay={0} />}<span>+</span></h2>
                  <p className="leading-relaxed text-[#ff8a00] font-semibold text-xl">Technical Blogs</p>
                  {/* </ScrollTrigger> */}
                </div>
              </div>

            </div>
          </div>
        {/* </ScrollTrigger> */}
      </section>

      

      {/* blogs */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="../../img/code.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Code
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Coding, or programming, is the language of computers. Learning to code opens up a world of opportunities and benefits
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="../../img/AI.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Artificial Intelligence
                  </h1>
                  <p className="leading-relaxed mb-3">
                  AI has the potential to bring about significant advancements and improvements in many aspects of human life, but it also presents challenges that need to be addressed responsibly to ensure its beneficial and ethical use.







                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="../../img/arvr.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    AR & VR
                  </h1>
                  <p className="leading-relaxed mb-3">
                  As AR and VR technologies continue to mature, they hold the potential to fundamentally transform how we work, learn, play, and connect with each other in the digital age. 
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
