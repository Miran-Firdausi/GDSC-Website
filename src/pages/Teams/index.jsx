import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import TeamsCard from "./TeamsCard";
import EventsImage from "@/assets/images/events/gamedev/1.png";
import teams from "./teams.json";
import illustration from "@/assets/images/teams.png";
import Transitions from "@/components/Transition";

import "./teams.css";

function Teams() {
  return (
    <Transitions>
      <GridBanner mainIllustration={illustration}>
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
              key={member.name}
            />
          ))}
        </div>
      </div>
    </Transitions>
  );
}

export default Teams;
