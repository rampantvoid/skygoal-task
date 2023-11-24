import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Destinations from "./components/Destinations/Destinations";
import Discount from "./components/Discount/Discount";
import Booking from "./components/Booking/Booking";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Destinations />
      <Discount />
      <Booking />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
