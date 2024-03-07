import { Link } from "react-router-dom";
import "./events-card.css";

function EventsCard({ title, description, date, image }) {
  return (
    <div className="events-card">
      <div className="events-card__container">
        <div className="events-card__image">
          <img src={image} />
        </div>
        <div className="events-card__detail">
          <div className="events-card__title">{title}</div>
          <div className="events-card__date">{date}</div>
          <div className="events-card__description">{description}</div>
        </div>
        <button className="events-card__button">Read More</button>
      </div>
    </div>
  );
}

export default EventsCard;
