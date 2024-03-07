import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "@/routes/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "./components/ProgressBar";
import MouseFollower from "./components/MouseFollower";
import ScrollTopButton from "./components/ScrollToTop";

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Our Team", path: "/teams" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact-us" },
  { name: "Events", path: "/events" },
];

function App() {
  return (
    <Router>
      <ProgressBar />
      <MouseFollower />
      <Navbar links={navLinks} />
      <ToastContainer />
      <Routes>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            element={route.render}
            key={route.lable}
          />
        ))}
      </Routes>
      <ScrollTopButton />

      <Footer />
    </Router>
  );
}

export default App;
