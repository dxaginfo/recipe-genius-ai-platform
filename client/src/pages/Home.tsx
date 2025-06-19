import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Turn Your Ingredients Into <span className="text-green-600">Delicious Meals</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Recipe Genius uses AI to create personalized recipes based on the ingredients 
          you have and your dietary preferences.
        </p>
        <Link 
          to="/generator" 
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium inline-block"
        >
          Create Recipe Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Enter Your Ingredients</h3>
              <p className="text-gray-600">
                Tell us what ingredients you have available in your kitchen. Our smart system will recognize and categorize them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Set Your Preferences</h3>
              <p className="text-gray-600">
                Specify any dietary restrictions, cuisine preferences, or nutritional goals you have.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Get Custom Recipes</h3>
              <p className="text-gray-600">
                Our AI generates personalized recipes optimized for your ingredients and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Create Your Next Meal?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          No more wasted ingredients or boring meals. Let Recipe Genius help you create something delicious today.
        </p>
        <Link 
          to="/generator" 
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium inline-block"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};