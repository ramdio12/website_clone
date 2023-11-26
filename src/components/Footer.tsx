import "./css/Footer.css";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__link">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => navigate("/#")}
          />
          <div className="links">
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/courses">Courses</CustomLink>
            <CustomLink to="/special-courses">Special Courses</CustomLink>
          </div>
        </div>
        <div className="footer__contacts">
          <h3>CONTACT US</h3>
          <div className="contact__details">
            <div className="detail__item">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <p>
                Zone 3, Barangay Cugman,Cagayan de Oro City, Philippines 9000
              </p>
            </div>
            <div className="detail__item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>Code@Codelearn.com</p>
            </div>
            <div className="detail__item">
              <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
              <p>www.facebook.com/codeatcodelearn</p>
            </div>
            <div className="detail__item">
              <FontAwesomeIcon icon={faSquareTwitter} className="icon" />
              <p>www.twitter.com/codeatcodelearn</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__copyright">
        <div>
          <p>&copy; 2023 Learn at Codelearn</p>
        </div>
        <div>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

function CustomLink({ to, children }: any) {
  const linkPath = useResolvedPath(to);
  const isActive = useMatch({ path: linkPath.pathname, end: true });

  return (
    <Link to={to} style={{ color: isActive ? "#8ed1fc" : "" }}>
      {children}
    </Link>
  );
}
