import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import EventsCard from "./EventsCard";
import EventsImage from "@/assets/images/events/gamedev/1.png";
import "./events.css";

function Events() {
  return (
    <>
      <GridBanner>
        <div className="banner-content">
          <Heading text="Events" />
        </div>
      </GridBanner>
      <div className="events-section">
        <div className="events-section__past-events">
          Check out our past events
        </div>
        <div className="events-section__grid">
          <EventsCard
            title="Google Solution Challenge"
            description="The mission of the Solution Challenge is to solve one or more of the United Nations' 17 Sustainable Development Goals using Google technology.
            Since 2020, Google Developer Student Clubs (GDSC) ..."
            date={"3 Dec 2023"}
            image={EventsImage}
          />
          <EventsCard
            title="Game dev"
            description='The Google Developer Student Clubs (GDSC) organized a highly successful workshop on
            September 9th, 2023, titled "Customizing the Dino Game ...'
            date={"9 Sep 2023"}
            image={EventsImage}
          />
          <EventsCard
            title="Flutter Workshop"
            description="The Flutter Workshop event proved to be a resounding success, offering participants an enriching experience d ..."
            date={"11 Aug 2023"}
            image={EventsImage}
          />
          <EventsCard
            title="Intro to Open-Source"
            description="The Open-Source Workshop, a collaborative effort by the Symbiosis Open-Source Society and Google Developer Student Clubs ..."
            date={"6 Oct 2023"}
            image={EventsImage}
          />
          <EventsCard
            title="Game dev"
            description="Lorem ipsum"
            image={EventsImage}
          />
          <EventsCard
            title="Game dev"
            description="Lorem ipsum"
            image={EventsImage}
          />
          <EventsCard
            title="Game dev"
            description="Lorem ipsum"
            image={EventsImage}
          />
        </div>
      </div>
    </>
  );
}

export default Events;
