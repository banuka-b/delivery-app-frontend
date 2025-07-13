import React from "react";
import { Package, Truck, Clock, MapPin, User, Star } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="pt-0">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive delivery solutions for all your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Package className="h-12 w-12 text-red-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Package Delivery</h3>
              <p className="text-gray-600 mb-4">Safe and secure delivery of packages, documents, and parcels</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Up to 50kg packages</li>
                <li>• Insurance coverage</li>
                <li>• Fragile item handling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Truck className="h-12 w-12 text-red-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Food Delivery</h3>
              <p className="text-gray-600 mb-4">Hot and fresh food delivery from restaurants to your doorstep</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Temperature controlled</li>
                <li>• Quick delivery</li>
                <li>• Partner restaurants</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Clock className="h-12 w-12 text-red-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Express Delivery</h3>
              <p className="text-gray-600 mb-4">Priority delivery service for urgent deliveries</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 15-20 minute delivery</li>
                <li>• Priority handling</li>
                <li>• Emergency service</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <MapPin className="h-12 w-12 text-red-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Scheduled Delivery</h3>
              <p className="text-gray-600 mb-4">Plan your deliveries in advance with our scheduling service</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Flexible timing</li>
                <li>• Recurring deliveries</li>
                <li>• Calendar integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <User className="h-12 w-12 text-red-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Personal Shopping</h3>
              <p className="text-gray-600 mb-4">We shop for you and deliver to your location</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Grocery shopping</li>
                <li>• Pharmacy pickup</li>
                <li>• Gift purchases</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Star className="h-12 w-12 text-red-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Premium Service</h3>
              <p className="text-gray-600 mb-4">VIP treatment with dedicated support and priority handling</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Dedicated driver</li>
                <li>• Premium support</li>
                <li>• Special handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
