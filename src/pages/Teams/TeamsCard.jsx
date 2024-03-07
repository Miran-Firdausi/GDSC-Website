import "./teams-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function TeamsCard({ name, designation, description, image }) {
  return (
    <div className="teams-card">
      <div className="teams-card__container">
        <div className="teams-card__image">
          <img src={image} />
        </div>
        <div className="teams-card__detail">
          <div className="teams-card__name">{name}</div>
          <div className="teams-card__designation">{designation}</div>
          <div className="teams-card__description">{description}</div>
        </div>
        <div className="teams-social-icons social-icons">
          <div
            className="social-icons__icon"
            style={{ backgroundColor: "#f6ba17" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div
            className="social-icons__icon"
            style={{ backgroundColor: "#2376e5", color: "#ffffff" }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div
            className="social-icons__icon"
            style={{ backgroundColor: "#e54336", color: "#ffffff" }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsCard;
