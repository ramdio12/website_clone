import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import "./css/Sidenav.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons/faSquareTwitter";
import logo from "../assets/img/hq_logo.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const clickToggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="navbar__menu">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/courses">Courses</CustomLink>
          <CustomLink to="/special-courses">Special Courses</CustomLink>
          <CustomLink to="/about">About Us</CustomLink>
          <CustomLink to="/contact">Contact Us</CustomLink>
        </div>
        <div className="navbar__social-media">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            color="#0693e3"
            className="icon"
          />
          <FontAwesomeIcon
            icon={faSquareTwitter}
            color="#0693e3"
            className="icon"
          />
        </div>
        <div className="toggleBtn" id="hamburger" onClick={clickToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className="sidenav" style={{ display: clicked ? "flex" : "none" }}>
        <div className="sidenav__items">
          <div className="btn-container">
            <button onClick={clickToggle}>X</button>
          </div>
          <div className="sidenav__menu">
            <CustomLink onClick={clickToggle} to="/">
              Home
            </CustomLink>
            <CustomLink onClick={clickToggle} to="/courses">
              Courses
            </CustomLink>
            <CustomLink onClick={clickToggle} to="/special-courses">
              Special Courses
            </CustomLink>
            <CustomLink onClick={clickToggle} to="/about">
              About Us
            </CustomLink>
            <CustomLink onClick={clickToggle} to="/contact">
              Contact Us
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

function CustomLink({ to, children, props }: any) {
  const linkPath = useResolvedPath(to);
  const isActive = useMatch({ path: linkPath.pathname, end: true });

  return (
    <Link {...props} to={to} style={{ color: isActive ? "#8ed1fc" : "" }}>
      {children}
    </Link>
  );
}
