import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Empowering KGPians:</span>
      <span className="block text-purple-600">Your Career Compass</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Navigate your professional journey with expert guidance, curated resources, and mentorship from accomplished KGPians.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/cv-repository"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                    >
                      View CV Repository
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                    >
                      Get Mentorship
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Access a comprehensive collection of resources to help you prepare for your career journey.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Curated CV Collection</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Access successful placement CVs from various departments and companies.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Mentorship Program</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Connect with successful KGPians for personalized career guidance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Smart Search</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Find relevant CVs and mentors based on department, company, and role.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Access</h3>
                  <p className="mt-2 text-base text-gray-500">
                    View CVs directly in the browser and download for offline reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block">Access our CV repository today.</span>
          </h2>
          <p className="mt-6 text-lg leading-6 text-purple-200">
            Join thousands of KGPians who have benefited from our repository and mentorship program.
          </p>
          <Link
            to="/cv-repository"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Meet the dedicated team behind the KGPians CV Repository
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center w-64">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="assets/images/team/varun.jpg"
                  alt="Varun"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Varun</h3>
              <p className="text-gray-500 text-center">Frontend Developer</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center w-64">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="assets/images/team/aditya.jpg"
                  alt="Aditya"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Aditya</h3>
              <p className="text-gray-500 text-center">Backend Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center w-64">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="assets/images/team/dhanush.jpg"
                  alt="Dhanush"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dhanush</h3>
              <p className="text-gray-500 text-center">UI/UX Designer</p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center w-64">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="assets/images/team/sarnab.jpg"
                  alt="Sarnab"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sarnab</h3>
              <p className="text-gray-500 text-center">Content Manager</p>
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col items-center w-64">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="assets/images/team/aryan.jpg"
                  alt="Aryan"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Aryan</h3>
              <p className="text-gray-500 text-center">Project Manager</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage; 