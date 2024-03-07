import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import TeamsCard from "./TeamsCard";
import EventsImage from "@/assets/images/events/gamedev/1.png";
import teams from "./teams.json";
import "./teams.css";

function Teams() {
  return (
    <>
      <GridBanner>
        <div className="banner-content">
          <Heading text="Our Team" />
        </div>
      </GridBanner>
      <div className="teams-section">
        <div className="teams-section__heading">Meet our team</div>
        <div className="teams-card-grid">
          {teams.members.map((member) => (
            <TeamsCard
              name={member.name}
              designation={member.Track}
              description="Description goes here ..."
              image={EventsImage}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Teams;
