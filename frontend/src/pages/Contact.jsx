import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

function Contact() {
  return (
    <>
    <ScrollRestoration />
    <section className="text-gray-600 body-font relative m-2 p-2">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Indira Bhavan 762, Mahavir Puri Road, Mahaveerpuri, Govindpur, Teliarganj, Prayagraj, Uttar Pradesh 211004&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
    {/* style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} */}
    {/* <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Indira Bhavan 762, Mahavir Puri Road, Mahaveerpuri, Govindpur, Teliarganj, Prayagraj, Uttar Pradesh 211004&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed-googlemap.com</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div> */}
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Share Your Valuable Feedback And Feel Free To Contact With Us</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-[#ff8a00] border-0 py-2 px-6 focus:outline-none hover:bg-[#ff7b00] rounded text-lg">Send Message</button>
      <p className="text-xs text-gray-500 mt-3">Thankyou For Contacting Us! And Helping Us To Improve!</p>
    </div>
  </div>
</section>

{/* faqs */}
<div className="max-w-screen-xl p-8 mx-auto">
    <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">
        FAQs
    </h2>
    <ul className="flex flex-wrap items-start gap-8">
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            How can I decide which technical field to pursue?
            </p>
            <div className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                Choosing a technical field depends on your interests, strengths, and career goals. Research different fields such as computer science, engineering, inhtmlFormation technology, etc. Explore their job prospects, required skills, and potential htmlFor growth. 
                </p>
            </div>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            What programming languages should I learn as a beginner?
            </p>
            <div className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                As a beginner, it's advisable to start with widely-used languages such as Python, Java, or JavaScript. These languages are versatile, have extensive documentation and community support, and are used in various domains like web development, software engineering, data science, and more.
                </p>
            </div>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            How can I stay updated with the latest trends and technologies in my field?
            </p>
            <div className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                Stay updated by following industry blogs, subscribing to relevant newsletters and our website, joining online communities such as Stack Overflow, GitHub, or Reddit, attending conferences, webinars, and tech meetups, and networking with professionals in your field through plathtmlForms like LinkedIn.
                </p>
            </div>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            What career paths are available in my technical field of interest?
            </p>
            <div className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                Career paths in technical fields vary depending on your interests and specialization. Some common career paths include software development, data analysis, cybersecurity, network engineering, cloud computing, artificial intelligence, and machine learning, among others. Research each path to understand the required skills, job responsibilities, and potential growth opportunities.
                </p>
            </div>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            How can I gain practical experience and build my portfolio as a technical student?
            </p>
            <div className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                Gain practical experience by working on projects, participating in internships, contributing to open-source projects, and attending hackathons or coding competitions. Build a portfolio showcasing your projects, skills, and achievements, and leverage online plathtmlForms like GitHub or LinkedIn to showcase your work to potential employers.
                </p>
            </div>
        </li>
        <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
            What are the best strategies htmlFor networking and advancing my career in the tech industry?
            </p>
            <div className="mt-2">
                <p className="text-base leading-6 text-gray-500">
                Networking is essential in the tech industry. Build genuine relationships, seek mentorship opportunities, and stay updated on industry news and developments to advance your career in the tech industry. Connect with our mentors htmlFor genuine guidance.
                </p>
            </div>
        </li>
    </ul>
</div>

    </>
  )
}

export default Contact