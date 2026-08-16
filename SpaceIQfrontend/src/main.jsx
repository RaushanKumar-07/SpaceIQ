import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Demo from "./Pages/Demo";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/product" element= { <Product/> } />
        <Route path="/Pricing" element= { <Pricing/> } />
        <Route path= "/About" element= { <About/> } />
        <Route path= "/Contact" element= { <Contact/> } />
        <Route path= "/Login" element= { <Login/> } />
        <Route path= "/register" element= { <Register/> } />
        <Route path= "/Demo" element= { <Demo/> } />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)
