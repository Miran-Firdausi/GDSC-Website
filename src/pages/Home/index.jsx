import "./index.css";
import GridBanner from "@/components/GridBanner";
import Button from "@/components/Button";
import SITBuilding from "@/assets/images/sit-building.png";
import introVideo from "@/assets/videos/intro-video.mp4";
import RedBullet from "@/assets/images/list-red.png";
import YellowBullet from "@/assets/images/list-yellow.png";
import GreenBullet from "@/assets/images/list-green.png";
import BlueBullet from "@/assets/images/list-blue.png";
import EventsCard from "../Events/EventsCard";
import events from "./events.json";
import Transitions from "../../components/Transition";

import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <Transitions>
      <GridBanner>
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title">
              <span className="text-red">G</span>
              <span className="text-green">D</span>
              <span className="text-blue">S</span>
              <span className="text-yellow">C</span>
            </div>
            <p className="hero__description">
              Symbiosis Institute of Technology, Pune
            </p>
            <Button text="Learn more" path="/about-us" color="red" />
          </div>
          <div className="social-icons hero-social-icons ">
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
      </GridBanner>
      <div className="about-section">
        <div className="about-section__main">
          <div className="about-section__content">
            <h2 className="about-section__heading">About Us</h2>
            <p className="about-section__description">
              Developer Student Clubs{" "}
              <span className="text-red">
                Symbiosis Institute Of Technology, Pune
              </span>{" "}
              is a Google Developers program for university students to learn
              skills in the domains of mobile development, web development,
              machine learning, and cloud (primarily). We also help encourage
              different other domains like competitive programming, ethical
              hacking, AR/VR, etc. The club is open to any student, ranging from
              novice developers who are just starting, to advanced developers
              who want to further their skills. The club is intended as a space
              for students to try out new ideas and collaborate to solve
              real-life problems.
            </p>
          </div>
          <div className="about-section__image">
            <img src={SITBuilding} />
          </div>
        </div>
        <div className="about-section__footer">
          <Link to="/about-us">
            <button className="button-outline">Read More</button>
          </Link>
        </div>
      </div>
      <div className="domain-strip">
        <motion.ul style={{ x: x }}>
          <li>Web Development</li>
          <li>Android Development</li>
          <li>Machine Learning</li>
          <li>Flutter Development</li>
          <li>Game development</li>
          <li>Competitive Programming</li>
          <li>Design</li>
          <li>Media</li>
        </motion.ul>
      </div>
      <div className="whatwedo-section">
        <div className="whatwedo-section__content">
          <h2 className="whatwedo-section__heading">What we do</h2>
          <ul className="whatwedo-section__list">
            <li>
              <img src={RedBullet} />
              Hands-on workshops
            </li>
            <li>
              <img src={BlueBullet} />
              Collaborative events with companies and fellow DSC
            </li>
            <li>
              <img src={YellowBullet} />
              Compete in the DSC Solution Challenge
            </li>
            <li>
              <img src={GreenBullet} />
              Google Cloud Study Jams
            </li>
            <li>
              <img src={RedBullet} />
              Android Study Jams
            </li>
            <li>
              <img src={BlueBullet} />
              Expert talks by industry experts
            </li>
            <li>
              <img src={YellowBullet} />
              Build projects
            </li>
          </ul>
        </div>
        <div className="whatwedo-section__image"></div>
      </div>
      <div className="events-highlight-section">
        <div className="events-highlight-section__heading fixed-heading">
          Highlights
        </div>
        <div className="events-scroll-container">
          <div className="events-card-container">
            <EventsCard
              title={events.title}
              date={events.date}
              description={events.description}
              image={events.image}
            />
            <EventsCard
              title={events.title}
              date={events.date}
              description={events.description}
              image={events.image}
            />
            <EventsCard
              title={events.title}
              date={events.date}
              description={events.description}
              image={events.image}
            />
            <EventsCard
              title={events.title}
              date={events.date}
              description={events.description}
              image={events.image}
            />
            <EventsCard
              title={events.title}
              date={events.date}
              description={events.description}
              image={events.image}
            />
            <div
              className="events-card"
              style={{ display: "flex", height: "490px", alignItems: "center" }}
            >
              <div className="events-card__see-all">
                <button className="button-outline">See all</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-section">
        <div className="video-container">
          <video autoPlay loop muted src={introVideo} typeof="video/mp4" />
        </div>
      </div>
    </Transitions>
  );
}

export default Home;
