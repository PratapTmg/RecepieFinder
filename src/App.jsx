import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomeComponents from "./pages/HomeComponents";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main container">
          <Routes>
            <Route path="/" element={<HomeComponents />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
