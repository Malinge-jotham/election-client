import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-white py-4 px-2 hover:bg-blue-600">Home</Link>
            {/* Wrapping the following links in a div */}
            <div className="hidden md:flex space-x-4">
              <Link to="/register" className="text-white py-4 px-2 hover:bg-blue-600">Register</Link>
              <Link to="/vote" className="text-white py-4 px-2 hover:bg-blue-600">Vote</Link>
              <Link to="/Cand-Register" className="text-white py-4 px-2 hover:bg-blue-600">Candidate Registration</Link>
              <Link to="/results" className="text-white py-4 px-2 hover:bg-blue-600">Results</Link>
              <Link to="/candidates" className="text-white py-4 px-2 hover:bg-blue-600">candidates</Link>

            </div>
          </div>
          {/* Toggle icon for small and medium devices */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleNavbar} className="text-white p-2 focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Responsive menu for small and medium devices */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Home</Link>
            {/* Render the same links as in the hidden div */}
            <Link to="/register" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Register</Link>
            <Link to="/vote" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Vote</Link>
            <Link to="/Cand-Register" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Candidate Registration</Link>
            <Link to="/results" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Results</Link>
            <Link to="/candidates" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>candidates</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
