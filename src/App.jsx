import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import Mission from './Components/Mission';
import Contact from './Components/Contact';
import Messege from './Components/Messege';
import Deshboard from './Components/Deshboard'
import SendMessege from './Components/SendMessege'
import Footer from './Components/Footer';
import Profile from './Components/Deshboard_files/Profile';
import IsAdmin from './Components/Deshboard_files/IsAdmin';
import UpLoadProduct from './Components/Deshboard_files/UpLoadProduct';
import Products from './Components/Deshboard_files/Products';
import ChangePassword from './Components/Deshboard_files/ChangePassword';
import Cart from './Components/Deshboard_files/Cart';
import Contextcart from './Components/Deshboard_files/Contextcart';
import ContextProfile from './Components/Deshboard_files/ContextProfile';
import Success from './Components/Deshboard_files/Success'
import Cancel from './Components/Deshboard_files/Cancel'
import Orders from './Components/Deshboard_files/Orders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>        
          <Route path="/" element={<Navbar />} /> 
          <Route path="/Register" element={<Register/>}/> 
          <Route path="/Login" element={<Login/>}/> 
          <Route path='/About' element={<About/>}/> 
          <Route path='/Mission' element={<Mission/>} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Messege' element={<Messege/>}/>
          <Route path='/Deshboard/*' element={<Deshboard/>}/>
          <Route path='/SendMessege' element={<SendMessege/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/IsAdmin' element={<IsAdmin/>}/>
          <Route path='/UpLoadProduct' element={<UpLoadProduct/>}/>
          <Route path='/ChangePassword' element={<ChangePassword/>}/>
          <Route path='/Products' element={<Products />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Contextcart' element={<Contextcart/>}/>
          <Route path='/ContextProfile' element={<ContextProfile/>}/>
          <Route path='/Success' element={<Success/>}/>
          <Route path='/Cancel' element={<Cancel/>}/>
          <Route path='/Orders' element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App
