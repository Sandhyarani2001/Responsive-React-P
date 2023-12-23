import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
 return (
   <>
   
   <BrowserRouter>
   
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Service' element={<Service/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    
   </>
  )
}

export default App;
