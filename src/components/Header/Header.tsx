import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <p>LOGO</p>
        </div>
        <div className="navbar-container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about-us">About Us</Link>
          </p>
          <p>
            <Link to="/services">Services</Link>
          </p>
          <p>
            <Link to="/news">News</Link>
          </p>
          <p>
            <Link to="/contact-us">Contact Us</Link>
          </p>
        </div>
        <div className="contact-us-container">
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Header;
