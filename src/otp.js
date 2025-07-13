import { useLocation, useNavigate } from 'react-router-dom'; 
import {useEffect, useState } from "react";
import axios from 'axios';


function Otp() {
   const navigate = useNavigate();
  
  const location = useLocation();
  const{name, email,password,confirmPassword} = location.state || {};
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(''));

   const handleChange = (e, idx) => {
  const value = e.target.value.replace(/\D/, ''); // only digits
  if (!value) return;

  const updated = [...otpDigits];
  updated[idx] = value;
  setOtpDigits(updated);
};
  
   const verifyOtp = () =>{
    const otp = otpDigits.join('')
    axios.post('http://localhost:3002/api/otp/verify' , {email,otp})
    .then(res =>{
      saveUser();
      sendEmail();
     
      
      
      alert("verfy!!")
      navigate("/Login")
    })
    .catch(err => {
      console.error(err);
      alert('Invalid or expired OTP');
    });
   }

    const saveUser =() =>{
      axios.post('http://localhost:3002/api/regi/register',{email,name,password,confirmPassword})
      .then(res =>{
        console.log("save")
      } );
    }
  
     const sendEmail =() => {
      axios.post('http://localhost:3002/api/mail/welcome',{email})
       .then(res =>{
       console.log("send")
      } );
     }

      
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Verify Your Account
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          A One-Time Password has been sent to <span className="font-medium">{email}@gmail.com</span>
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {[...Array(6)].map((_, idx) => (
            <input
            onChange={(e) => handleChange(e, idx)}
              key={idx}
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        <button  onClick={verifyOtp} className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300">
          Validate 
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Didn't receive the code?</p>
          <button className="text-red-500 font-medium hover:underline">Resend One-Time Password</button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
