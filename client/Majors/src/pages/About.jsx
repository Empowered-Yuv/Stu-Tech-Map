import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <>

      {/* Done About Page! 01 Mar 24 1:24AM */}
      {/* what is StuTechmap */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="../img/What-is.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-[#0c24ff]">
              What is StuTechMap?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-2xl font-medium text-[#ff8a00]">
              An organization that empowers students to gain insights about
              technical industry. Keep updated with the evolving technologies
              and know about the paths to successful career. Talk with mentors
              to get solutions to their problems.
            </p>
          </div>
        </div>
      </section>

      {/* why */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="../img/Problem.jpg"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#ff8a00] text-indigo-500 mb-5">
                <img
                  src="../img/qm.png"
                  alt=""
                  className="flex justify-center items-center w-8 h-8"
                />
              </div>
              <div className="flex-grow">
                <h2 className=" text-3xl title-font font-semibold mb-3 text-[#0c24ff]">
                  The Problem?
                </h2>
                <p className="leading-relaxed text-lg font-medium">
                  Confused student as technical revolution is taking place!
                  Difficult to understand which field to choose?
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#ff8a00] text-indigo-500 mb-5">
                <img
                  src="../img/tm.png"
                  alt=""
                  className="flex justify-center items-center w-8 h-8"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#0c24ff] text-3xl title-font font-semibold mb-3">
                  The Solution
                </h2>
                <p className="leading-relaxed text-lg font-medium">
                  Know about different domains!
                </p>
                <p className="leading-relaxed text-lg font-medium">
                  Analyze ur interests!
                </p>
                <p className="leading-relaxed text-lg font-medium">
                  Choose the right path!
                </p>
                <p className="leading-relaxed text-lg font-medium">
                  Excel in that domain!
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#ff8a00] text-indigo-500 mb-5">
                <img
                  src="../img/highimp.png"
                  alt=""
                  className="flex justify-center items-center w-8 h-8"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#0c24ff] text-3xl title-font font-semibold mb-3">
                  Last but not the Least
                </h2>
                <p className="leading-relaxed text-lg font-medium">
                  Keep Updated with the Technical Industry!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we actually do */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-[#002057] pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8a00] inline-flex items-center justify-center text-white relative z-10">
                  <img
                    src="../img/info.png"
                    alt=""
                    className="flex justify-center items-center w-5 h-5"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-2xl text-[#0c24ff] mb-1 tracking-wide">
                    Inform U About Insights!
                  </h2>
                  <p className="leading-relaxed text-lg text-[#002057]">
                    Inform about various and latest technologies of the
                    industry!
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-[#002057] pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8a00] inline-flex items-center justify-center text-white relative z-10">
                  <img
                    src="../img/update.png"
                    alt=""
                    className="flex justify-center items-center w-5 h-5"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-2xl text-[#0c24ff] mb-1 tracking-wide">
                    Keep U Updated!
                  </h2>
                  <p className="leading-relaxed text-lg text-[#002057]">
                    Give u updates about the evolutions in this ever-changing
                    industry with our blogs.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-[#002057] pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8a00] inline-flex items-center justify-center text-white relative z-10">
                  <img
                    src="../img/guide1.png"
                    alt=""
                    className="flex justify-center items-center w-7 h-7"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-2xl text-[#0c24ff] mb-1 tracking-wide">
                    Guide U!
                  </h2>
                  <p className="leading-relaxed text-lg text-[#002057]">
                    Give u valuable tips and our mentors guide u at every step
                    in ur learning journey.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-[#002057] pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8a00] inline-flex items-center justify-center text-white relative z-10">
                  <img
                    src="../img/road.png"
                    alt=""
                    className="flex justify-center items-center w-5 h-5"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-2xl text-[#0c24ff] mb-1 tracking-wide">
                    Show Path To Success!
                  </h2>
                  <p className="leading-relaxed text-lg text-[#002057]">
                    To check whether u r off-track or not, we provide roadmaps
                    to be on track and keep u posted.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8a00] inline-flex items-center justify-center text-white relative z-10">
                  <img
                    src="../img/tm.png"
                    alt=""
                    className="flex justify-center items-center w-6 h-6"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-2xl text-[#0c24ff] mb-1 tracking-wide">
                    FINISH!
                  </h2>
                  <p className="leading-relaxed text-lg text-[#002057]">
                    In this competitive world, now u hv become a contributor in
                    this technical society and proud member of our community.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="../img/What-we-do.webp"
              alt="step"
            />
          </div>
        </div>
      </section>

      {/* team */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-7xl text-3xl font-semibold title-font mb-4 text-[#002057] tracking-wider">
              Meet Our Team!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-medium text-[#ff8a00]">
              The team, a mosaic of talents, each a brushstroke in the
              masterpiece of progress. Their synergy ignites ideas, their
              diversity fuels creativity, and their unity propels them towards
              excellence. Together, they forge paths through complexity, turning
              challenges into triumphs.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="../img/h.png"
                />
                <div className="flex-grow sm:pl-8 m-3">
                  <h2 className="title-font font-semibold text-2xl text-[#002057]">
                    Harshraj Gupta
                  </h2>
                  <h3 className=" mb-3 text-lg font-medium text-[#ff8a00]">UI Developer</h3>
                  <p className="mb-4 text-[#0c24ff] text-base">
                  He crafts digital experiences, blending artistry with functionality to create interfaces that captivate and empower users. He weaves together design principles and code, shaping pixels into seamless interactions that elevate user engagement.
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="../img/p.jpg"
                />
                <div className="flex-grow sm:pl-8 m-3">
                <h2 className="title-font font-semibold text-2xl text-[#002057]">
                    Prashant Mishra
                  </h2>
                  <h3 className=" mb-3 text-lg font-medium text-[#ff8a00]">Backend Developer</h3>
                  <p className="mb-4 text-[#0c24ff] text-base">
                  He architects the digital backbone, engineering the infrastructure that powers seamless user experiences. He wields databases and server-side languages, building robust systems that ensure reliability and scalability.
                  </p>

                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="../img/s.jpg"
                />
                <div className="flex-grow sm:pl-8 m-3">
                <h2 className="title-font font-semibold text-2xl text-[#002057]">
                    Shivam Singh Rajput
                  </h2>
                  <h3 className=" mb-3 text-lg font-medium text-[#ff8a00]">DataBase Administrator</h3>
                  <p className="mb-4 text-[#0c24ff] text-base">
                  He safeguards the digital vaults, ensuring data integrity and accessibility with meticulous care. He optimizes queries, fine-tune configurations, and fortify defenses, keeping the heartbeat of information technology pulsing reliably.
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="../img/Learners.png"
                />
                <div className="flex-grow sm:pl-8 m-3">
                <h2 className="title-font font-semibold text-2xl text-[#002057]">
                    Anonymous
                  </h2>
                  <h3 className=" mb-3 text-lg font-medium text-[#ff8a00]">Technical Lead</h3>
                  <p className="mb-4 text-[#0c24ff] text-base">
                  He navigates the seas of innovation, guiding teams with wisdom and vision towards technological excellence. He inspires, mentors, and strategizes, fostering an environment where brilliance thrives and boundaries are surpassed.
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-900">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
