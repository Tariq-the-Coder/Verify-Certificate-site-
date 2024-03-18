import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar_Main from "./Components/Navbar_Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import CertificateVerify from "./Components/Pages/Certificate Verification/CertificateVerify";
import AdminPanel from "./Components/Pages/Admin Panel/AdminPanel";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";

function App() {
  
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Navbar_Main />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CertificateVerify" element={<CertificateVerify/>} />
            {/* <Route path="/AdminPanel" element={loggedinuser.isAdmin?<AdminPanel/>:<Navigate to={"/login"} />} /> */}
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route element={<PrivateRoute />}>
            <Route path="/Adminpanel" element={<PrivateRoute  />} />
</Route>
          
          </Routes>
        </main>
        <footer className="footer">
          <div className="">Copyright © 2001 ACCEd Qadian, India, All rights reserved.</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
