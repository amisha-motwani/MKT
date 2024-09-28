import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignYourOwn from "./pages/ProductCategory/DesignYourOwn.jsx";
import Teamwear from "./pages/ProductCategory/Teamwear.jsx";
import Sports from "./pages/ProductCategory/Sports.jsx";
import Corporate from "./pages/ProductCategory/Corporate.jsx";
import Fitness from "./pages/ProductCategory/Fitness.jsx";
import Navbar from "./Component/Navbar.jsx";
import Accessories from "./pages/ProductCategory/Accessories.jsx";
import Uniform from "./pages/ProductCategory/Uniform.jsx";
import ProductDetails from "./pages/ProductCategory/ProductDetails.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Login/Register.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Pioneers from "./pages/Pioneers.jsx";
import Careers from "./pages/Careers.jsx";
import Shirt from "./pages/ProductCategory/Shirt.jsx";
import BeyondBusiness from "./pages/BeyondBusiness.jsx";
import Promotional from "./pages/ProductCategory/Promotional.jsx";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/DesignYourOwn" element={<DesignYourOwn />} />
            <Route path="/Shirts" element={<Shirt />} />
            <Route path="/" element={<Teamwear />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Corporate" element={<Corporate />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Uniform" element={<Uniform />} />
            <Route path="/Promotional" element={<Promotional/>}   />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Details/:id" element={<ProductDetails />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Pioneers" element={<Pioneers />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/BeyondBusiness" element={<BeyondBusiness/>}  />

          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
