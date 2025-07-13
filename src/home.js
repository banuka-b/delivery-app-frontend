import React from "react";
import { useNavigate } from 'react-router-dom';
import { Clock, Package, MapPin } from "lucide-react"; // Ensure lucide-react is installed

const Home = () => {
   // You should pass this as a prop ideally
const navigate = useNavigate()
  return (
    <div className="pt-16">
      {/* Hero Section */}
      

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose QuickDrop?</h2>
            <p className="text-xl text-gray-600">Fast, reliable, and affordable delivery solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Clock className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Average delivery time of 30-45 minutes within Kandy town</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Package className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Safe & Secure</h3>
              <p className="text-gray-600">Your packages are handled with utmost care and security</p>
            </div>
            

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <MapPin className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Real-time Tracking</h3>
              <p className="text-gray-600">Track your delivery in real-time from pickup to drop-off</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coverage Areas</h2>
            <p className="text-xl text-gray-600">We deliver across Kandy and surrounding areas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Kandy City",
              "Peradeniya",
              "Katugastota",
              "Gampola",
              "Digana",
              "Pallekele",
              "Kundasale",
              "Ampitiya",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-400 transition duration-300"
              >
                <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
