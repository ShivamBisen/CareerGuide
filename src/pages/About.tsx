import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
              About CareerGuide
            </h1>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              A platform designed to streamline and standardize the CV creation process for students
            </p>
          </div>

          {/* CareerGuide Description Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                About Our Platform
              </h2>
              
              <div className="prose prose-purple max-w-none">
                <p className="text-gray-600 mb-4">
reerGuide is a comprehensive platform designed to revolutionize the CV creation and Career Guidance process for students. We understand the challenges students face when choosing their career paths, and we're here to make that process seamless and effective.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To empower students with a standardized, user-friendly solution for creating professional CVs that effectively showcase their achievements and potential to prospective employers and to provide them with the best possible resources and guidance for their career paths.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      To become the go-to platform for students seeking for career guidance, while learning the professional standards across all career domains.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">Standardized CV Templates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">User-Friendly Interface</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">Professional Formatting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">Easy Content Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              The passionate individuals behind CareerGuide's development and success
            </p>
          </div>

          {/* Creator Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src="assets/images/praneeth.jpg"
                      alt="Sudhagani Praneeth Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Creator Info */}
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Meet the Creator
                  </h2>
                  
                  <div className="prose prose-purple max-w-none">
                    <p className="text-gray-600 mb-4">
                      Sudhagani Praneeth Kumar is a third-year undergraduate student at the Indian Institute of Technology Kharagpur, pursuing Bachelor's in Bioscience and Biotechnology. Passionate about Strategy and consulting, he actively participates in various campus organizations including Students' Branding and Relations Cell, TedxIITKharagpur, and SPIC MACAY.
                    </p>
                    
                    <p className="text-gray-600 mb-4">
                      An enthusiastic learner focused on building connections and taking on new challenges to drive both personal and professional growth. His experience includes working on numerous real industry problems, and he has founded a freelance startup called Prodigy.
                    </p>

                    <p className="text-gray-600 mb-6">
                      "I developed this platform during my time at CDC to address the challenges students face when creating professional CVs. Having experienced the CV creation process firsthand, I understood the need for a standardized, user-friendly solution."
                    </p>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Key Involvements</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Students' Branding and Relations Cell
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          TedxIITKharagpur
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          SPIC MACAY
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Founder of Prodigy (Freelance Startup)
                        </li>
                      </ul>
                      <div className="flex gap-4 mt-6">
                        <a 
                          href="https://www.linkedin.com/in/praneeth-kumar-sudhagani/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a 
                          href="https://www.instagram.com/sudhagani.praneeth_kumar/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src="assets/images/bhuvan.png"
                      alt="Bhuvan Raj Guguloth"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Developer Info */}
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Meet The Developer
                  </h2>
                  
                  <div className="prose prose-purple max-w-none">
                    <p className="text-gray-600 mb-4">
                      Bhuvan Raj Guguloth is a 3rd Year Mechanical Engineering undergraduate with a unique blend of technical expertise and entrepreneurial spirit. His proficiency spans Product Management, UI/UX Design, and Startup Leadership, making him an invaluable asset to CareerGuide's development.
                    </p>
                    
                    <p className="text-gray-600 mb-4">
                      With significant experience in AI-driven product development and digital strategy through his roles at Vishwa AI and Kaizing Turtles, Bhuvan brings a wealth of practical knowledge to the platform. As the Co-founder of Prodigy Digitals, he has demonstrated exceptional skills in business strategy and technology integration.
                    </p>

                    <p className="text-gray-600 mb-4 italic">
                      "You can change anything overnight, It Just takes Years to get to that night. Our CareerGuide is the platform which takes you to that single Night"
                    </p>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Key Achievements & Roles</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Co-founder of Prodigy Digitals
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Design Lead at Shaurya & Technology Students' Gymkhana
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Experience at Vishwa AI & Kaizing Turtles
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Multiple Tech & Non-Tech Competition Winner
                        </li>
                      </ul>
                      <div className="flex gap-4 mt-6">
                        <a 
                          href="https://www.linkedin.com/in/bhuvanrajguguloth05/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a 
                          href="https://www.instagram.com/bhuvanraj.05/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategist Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src="assets/images/kanade.png"
                      alt="Rushikesh Kanade"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Strategist Info */}
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    Meet The Executor / Strategist
                  </h2>
                  
                  <div className="prose prose-purple max-w-none">
                    <p className="text-gray-600 mb-4">
                      Rushikesh Kanade brings strategic insight and execution excellence to CareerGuide. His understanding of student needs and career development has been instrumental in shaping the platform's direction.
                    </p>
                    
                    <p className="text-gray-600 mb-4">
                      With a keen eye for user experience and process optimization, Rushikesh has helped ensure that CareerGuide meets the diverse needs of its users while maintaining simplicity and effectiveness.
                    </p>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Key Responsibilities</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Project Strategy
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          User Experience Design
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Process Optimization
                        </li>
                      </ul>
                      <div className="flex gap-4 mt-6">
                        <a 
                          href="https://www.linkedin.com/in/rushikesh-kanade-970a15259/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a 
                          href="https://www.instagram.com/rushikanade/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 