import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section-one">
        <div className="up"></div>
        <div className="down"></div>
      </div>
      <div className="section-two">
        <div className="first">
          <div className="title">
            <p>LOGO</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              eaque est eos, aliquam debitis.
            </p>
          </div>
          <div className="@">@Logo</div>
        </div>
        <div className="seconde"></div>
        <div className="third">
          <div className="title">
            <p>Contact us</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              eaque est eos, aliquam debitis.
            </p>
          </div>
          <div className="phone-number">(+972)-(0)-54-4444444</div>
        </div>
        <div className="forth">
          <div className="facebook-btn-container">
            <button className="facebook">
              <FontAwesomeIcon icon={faFacebookF as IconProp} />
            </button>
          </div>
          <div className="instagram-btn-container">
            <button className="instagram">
              <FontAwesomeIcon icon={faInstagram as IconProp} />
            </button>
          </div>
          <div className="twitter-btn-container">
            <button className="twitter">
              <FontAwesomeIcon icon={faTwitter as IconProp} />
            </button>
          </div>
          <div className="linkedin-btn-container">
            <button className="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
            </button>
          </div>
        </div>
      </div>
      <div className="section-three">
        <p> Copyright © R.s. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
