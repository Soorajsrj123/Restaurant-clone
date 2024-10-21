import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Dishes from "../pages/Dishes/Dishes";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
function LayoutRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default LayoutRoutes;
