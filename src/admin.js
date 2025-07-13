import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
const [deliveries, setDeliveries] = useState([]);
useEffect(() => {
  getAllDeliveries();
}, []);


const getAllDeliveries =()=>{
    axios.get('http://localhost:3002/api/ad/admin')
    .then(response =>{
        setDeliveries(response.data);

    }).catch((err) =>{
        console.error("delivery fetch error",err)
    })
}
const handleStatusChange = (username, newStatus) => {
  axios.put(`http://localhost:3002/api/ad/updatedel`, {
    username,
    status: newStatus
  })
  .then(() => getAllDeliveries())
  .catch(err => console.error("Update failed:", err));
};


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Deliveries</h2>
      <table className="min-w-full bg-white border rounded shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">User</th>
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Details</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery._id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{delivery.username}</td>
              <td className="py-2 px-4">{delivery.customer}</td>
              <td className="py-2 px-4">{delivery.address}</td>
              <td className="py-2 px-4">{delivery.details}</td>
              <td className="py-2 px-4">{delivery.date?.split("T")[0]}</td>
              <td className="py-2 px-4">
                <span className="capitalize">{delivery.status}</span>
              </td>
              <td className="py-2 px-4">
                <select
                  defaultValue={delivery.status}
                  onChange={(e) => handleStatusChange(delivery.username, e.target.value)}

                  className="border px-2 py-1 rounded"
                >
                  {["pending", "completed", "cancelled"].map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
