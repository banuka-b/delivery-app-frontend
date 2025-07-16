import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

if(email=="admin" && password=="admin"){
  navigate('/admin')
}


 const login = async (e) => {
  e.preventDefault();

 

  const fullEmail = email.includes("@") ? email : `${email}@gmail.com`;
     
  try {
    const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/regi/login`, {
      email: fullEmail,
      password,
    });
    
    alert("Login successful!");
    navigate("/Dashboard", {
      state: { email },
    });
  } catch (err) {
    console.error("Login failed:", err);
    alert("Login failed. Please check your credentials.");
  }
  
};
    
    
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 sm:px-12 shadow sm:rounded-lg">
          <form onSubmit={login}>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>

            <div className="mt-6">
              <div className="flex rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-300 sm:text-sm"
                />
                <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md sm:text-sm">@gmail.com</span>
              </div>
            </div>

            <div className="mt-6">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-blue-500 transition"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
