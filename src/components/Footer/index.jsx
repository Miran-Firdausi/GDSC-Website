// import { Link } from "react-router-dom";
import Logo from "@/assets/images/gdsc-white.png";
import HeartIcon from "@/assets/images/heart.svg";
import Button from "@/components/Button";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="credits">
          <p className="credits__text">
            Made with <img className="credits__heart" src={HeartIcon} /> by
          </p>
          <img className="credits__image" src={Logo} />
          <p className="credits__college-name">
            Sybmiosis Institute of Technology
          </p>
          <Button text="Join our community" path="#" color="yellow" />
        </div>
        <div className="quick-links-section">
          <p>Quick links</p>
          <ul className="quick-links__list">
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Source Code</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; 2024 GDSC SIT | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
