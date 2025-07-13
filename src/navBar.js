import React, { useState } from "react";
import { FaTruck, FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Replace with actual icons
// OR use HeroIcons or other icons if you're using a specific icon set

const Navbar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("home");
  };

  return (
    <>
      <nav className="bg-white  fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <FaTruck className="h-8 w-8 text-black-100" />
              
                <span className=" font-mono ml-2 text-2xl font-bold text-gray-900">
                <span className="text-red-600">Q</span>uickDrop
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "services", "contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium ${
                    currentPage === page
                      ? "text-red-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1).replace("us", " Us")}
                </button>
              ))}

              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage("dashboard")}
                    className={`px-3 py-2 text-sm font-medium ${
                      currentPage === "dashboard"
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 flex items-center"
                  >
                    <FaSignOutAlt className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate('/Signup')}
                  className="bg-black text-white px-7 py-2 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center"
                >
                  
                  Login
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "about", "services", "contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1).replace("us", " Us")}
                </button>
              ))}
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      setCurrentPage("dashboard");
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block px-3 py-2 text-base font-medium text-red-600 hover:text-red-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setCurrentPage("login");
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-800"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
