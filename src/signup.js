import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [uname, setUname] =useState("")
  const [username, setUsername] = useState("")

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/otp/send`,{
        email,
        uname,
      });
      alert(`OTP sent to ${email}`);
    navigate("/Otp",{
        state: {
            uname,
            username,
            email,
            password,
            confirmPassword
        }
    });
  } catch (err) {
      alert("Failed to send OTP. Please try again.");
      console.error(err);
    }
  };

  
 


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </h2>
            <p onClick={() => navigate("/Login")} className="mt-2 text-center text-sm text-gray-500">
              <a
                
                className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
              >
                login to your account
              </a>
            </p>

            <input
              id="uname"
              name="uname"
              placeholder="Name"
              type="text"
              onChange={(e) => setUname(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 transition duration-150 sm:text-sm"
            />

            <div className="mt-6">
              <div className="flex rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-300 transition sm:text-sm"
                />
                <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md sm:text-sm">
                  @gmail.com
                </span>
              </div>
            </div>

            <div className="mt-6">
              <input
                id="username"
                name="username"
                value={email}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 transition duration-150 sm:text-sm"
              />
            </div>

            <div className="mt-6">
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-50"
                >
                  {showPassword ? <FaRegEye /> :<FaRegEyeSlash /> }
                </button>
              </div>
            </div>

            <div className="mt-6">
              <input
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirm Password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 transition sm:text-sm"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-6">
              <button 
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-red-500 transition duration-150"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;





