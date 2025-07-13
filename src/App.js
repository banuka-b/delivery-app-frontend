
import './App.css';
import Navbar from './navBar';
import Header from './Header';
import AdminDashboard from './admin';
import Home from './home';
import ServicesPage from './Service';
import Footer from './Footer';
import  Signup from './signup';


function App() {

  
  return (
    
    <div className="App">
      <header className="App-header">
<Navbar></Navbar>
<Header></Header> 
<Home></Home>
<ServicesPage></ServicesPage> 
<Signup></Signup>
<Footer></Footer>   
      
    
    
     
      </header>

    </div>
   
  );
}

export default App;
