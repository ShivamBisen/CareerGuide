import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const logo= '/assets/images/logo/careerguide.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="CareerGuide Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
            >
              Home
            </Link>
            <Link 
              to="/roadmaps" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
            >
              Roadmaps
            </Link>
            <Link 
              to="/cv-repository" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
            >
              CV Repository
            </Link>
            <Link 
              to="/cv-buddy" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
            >
              CV Buddy
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/roadmaps"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Roadmaps
          </Link>
          <Link
            to="/cv-repository"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CV Repository
          </Link>
          <Link
            to="/cv-buddy"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CV Buddy
          </Link>
          <Link
            to="/resources"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;