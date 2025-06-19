import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Recipe Genius</h2>
            <p className="text-gray-300 max-w-md">
              AI-powered recipe generation platform that creates personalized recipes 
              based on available ingredients and dietary constraints.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/generator" className="text-gray-300 hover:text-white">Recipe Generator</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">support@recipegenius.com</li>
                <li className="text-gray-300">Privacy Policy</li>
                <li className="text-gray-300">Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Recipe Genius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};