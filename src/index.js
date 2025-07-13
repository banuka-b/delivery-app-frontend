
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CRUD from './CRUD'
import ServicesPage from './Service';
import Signup from './signup';
import Otp from './otp';
import Add from  './pages/Add'
import Dashboard from './dash';
import Login from './login';
import AdminDashboard from './admin';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/CRUD" element={<CRUD/>} />
      <Route path="/signup" element={<Signup/>} />
        <Route path="/service" element={<ServicesPage/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/admin' element ={<AdminDashboard/>} />
        
          <Route path='/login' element={<Login/>} />
       
        <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

// Logging performance metrics
reportWebVitals();
