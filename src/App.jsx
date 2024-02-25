import { Outlet } from "react-router-dom";
import React from 'react'
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//mport Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import AttractiveFeatureComponent from "./components/AttractiveFeatureComponent";
//import Banner from "./components/Banner";


function App() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
      </div>
      <Outlet />
    <Footer />
    </React.Fragment>
  );
}

export default App;
