import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import SpecialCourses from "./pages/SpecialCourses/SpecialCourses";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Course from "./pages/Course/Course";
import SpecialCourse from "./pages/SpecialCourse/SpecialCourse";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/training/:id" element={<Course />} />
            <Route path="/special-courses" element={<SpecialCourses />} />
            <Route
              path="/special-courses/course/:id"
              element={<SpecialCourse />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;

// Home
// Courses
// Special Courses
// About Us
// Contact Us
