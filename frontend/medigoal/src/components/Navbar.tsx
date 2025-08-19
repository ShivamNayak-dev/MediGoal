import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Heart } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#0077B6]" />
            <span className="text-xl font-bold text-[#333333]">MedCare</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search fundraisers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/browse" 
              className="text-[#333333] hover:text-[#0077B6] transition-colors duration-200"
            >
              Browse Fundraisers
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-[#333333] hover:text-[#0077B6] transition-colors duration-200"
              >
                <span>Fundraise For</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link to="/start-fundraiser" className="block px-4 py-2 text-[#333333] hover:bg-gray-50">
                    Medical
                  </Link>
                  <Link to="/start-fundraiser" className="block px-4 py-2 text-[#333333] hover:bg-gray-50">
                    Education
                  </Link>
                  <Link to="/start-fundraiser" className="block px-4 py-2 text-[#333333] hover:bg-gray-50">
                    Others
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/how-it-works" 
              className="text-[#333333] hover:text-[#0077B6] transition-colors duration-200"
            >
              How It Works
            </Link>

            <Link
              to="/start-fundraiser"
              className="px-4 py-2 border-2 border-[#00BFA5] text-[#00BFA5] rounded-full hover:bg-[#00BFA5] hover:text-white transition-all duration-200"
            >
              Start a Fundraiser
            </Link>

            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-[#0077B6] hover:underline"
              >
                Login
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                to="/signup" 
                className="text-[#0077B6] hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;