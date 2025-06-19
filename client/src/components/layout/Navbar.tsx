import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Recipe Genius
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-500">
            Home
          </Link>
          <Link to="/generator" className="text-gray-700 hover:text-green-500">
            Generate Recipe
          </Link>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};