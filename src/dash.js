import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import TrackingMap from "./TrackingMap";
import Footer from "./Footer";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  const username = email;

  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    getDelivery();
  }, []);

  const getDelivery = () => {
    axios
      .get(`http://localhost:3002/api/deli/delivery/${username}`)
      .then((res) => {
        setDeliveries(res.data);
      })
      .catch((err) => {
        console.error("Delivery fetch error:", err);
      });
  };

  const getColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "yellow";
      case "completed":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-black shadow-sm border-b border-gray-800 px-6 py-10 relative">
          <div className="absolute top-6 right-6 flex items-center space-x-3">
            <span className="text-white font-medium text-lg">Hi, {email}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold text-white">Dashboard Overview</h1>
            <p className="text-gray-300 text-sm mt-1">Welcome back, Let’s Start!</p>
          </div>
        </header>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <p className="text-sm text-gray-600">Latest orders and transactions</p>
            </div>
            <button
              onClick={() => navigate("/add", { state: { email } })}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i className="fas fa-plus mr-2" />
              Add Order
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {["Order ID", "Customer", "Address", "Details", "Status", "Date"].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {deliveries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-6 text-center text-sm text-gray-400">
                      No deliveries found.
                    </td>
                  </tr>
                ) : (
                  deliveries.map((delivery, index) => {
                    const color = getColor(delivery.status);
                    const formattedDate = delivery.date?.split("T")[0] || "";

                    return (
                      <tr key={delivery._id || index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {delivery.shortId || delivery._id?.slice(-4)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {delivery.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {delivery.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {delivery.details}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-${color}-100 text-${color}-800`}
                          >
                            {delivery.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formattedDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="fas fa-eye" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <i className="fas fa-edit" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <i className="fas fa-trash" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Tracking + Delivery Categories */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Live Location</h3>
              <p className="text-sm text-gray-600">Delivery tracking in real time</p>
            </div>
            <div className="h-96 w-full rounded-md overflow-hidden relative">
              <TrackingMap className="w-full h-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Delivery Categories</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Manage
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Food Delivery",
                  icon: "fa-utensils",
                  color: "bg-red-100 text-red-600",
                  description: "Hot meals, fast food, restaurant orders",
                },
                {
                  label: "Parcel Delivery",
                  icon: "fa-box",
                  color: "bg-yellow-100 text-yellow-700",
                  description: "Small to mid-size personal packages",
                },
                {
                  label: "Grocery Delivery",
                  icon: "fa-shopping-basket",
                  color: "bg-green-100 text-green-700",
                  description: "Daily essentials, fresh produce, household items",
                },
                {
                  label: "Medicine Delivery",
                  icon: "fa-pills",
                  color: "bg-purple-100 text-purple-700",
                  description: "Prescriptions and OTC medication drops",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 rounded-lg border border-gray-100 hover:shadow transition">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${item.color}`}>
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
