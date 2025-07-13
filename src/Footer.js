import React from "react";
import { Truck } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center mb-4">
            <Truck className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-2xl font-bold">QuickDrop</span>
          </div>
          <p className="text-gray-400 mb-6">
            Your trusted delivery partner in Kandy. Fast, reliable, and affordable delivery services for all your needs.
          </p>
         
          
           
          </div>
      
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><button className="hover:text-white transition duration-300">Package Delivery</button></li>
            <li><button className="hover:text-white transition duration-300">Food Delivery</button></li>
            <li><button className="hover:text-white transition duration-300">Express Service</button></li>
            <li><button className="hover:text-white transition duration-300">Scheduled Delivery</button></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><button className="hover:text-white transition duration-300">Help Center</button></li>
            <li><button className="hover:text-white transition duration-300">Track Order</button></li>
            <li><button className="hover:text-white transition duration-300">Contact Us</button></li>
            <li><button className="hover:text-white transition duration-300">FAQ</button></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 QuickDrop. All rights reserved. | Serving Kandy with pride.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
