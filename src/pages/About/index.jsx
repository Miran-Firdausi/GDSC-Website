import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import SITBuilding from "@/assets/images/sit-building-image.jpg";
import ImageCard from "../Gallery/ImageCard";
import illustration from "@/assets/images/home.png";
import Transitions from "../../components/Transition";

import "./about.css";

function About() {
  return (
    <Transitions>
      <GridBanner mainIllustration={illustration}>
        <div className="banner-content">
          <Heading text="About Us" />
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
            <ImageCard url={SITBuilding} />
          </div>
        </div>
        <div className="mission-section">
          <h2 className="about-section__heading">Our Mission</h2>
          <p className="mission-section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
            asperiores, optio earum corporis porro ratione! Laboriosam accusamus
            amet minima.
          </p>
          <h2 className="about-section__heading">Our Vision</h2>
          <p className="mission-section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum
            asperiores, optio earum corporis porro ratione! Laboriosam accusamus
            amet minima.
          </p>
        </div>
      </div>
    </Transitions>
  );
}

export default About;
