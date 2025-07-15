import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


function Add() {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");

  const location = useLocation();
  const { email} = location.state || {};
  

  const addDelivery = (e) => {
    e.preventDefault();

   axios.post(`${process.env.REACT_APP_ENDPOINT}/api/deli/delivery`, {

         username: email,
        customer,
        address,
        details,
        date,
      })
      .then(() => {
        alert("Delivery added successfully!");
        
        setCustomer("");
        setAddress("");
        setDetails("");
        setDate("");
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid data. Please try again.");
      });
  };

  return (
    <form
      onSubmit={addDelivery}
      className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Add New Delivery</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          placeholder="John Doe"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Main St, City, Country"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Package Details</label>
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="1x iPhone, 2x AirPods"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Delivery
      </button>
    </form>
  );
}

export default Add;
