import ImageCard from "./ImageCard";
import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import CardsImage from "@/assets/images/Group-photo.png";
import illustration from "@/assets/images/gallery.png";
import Transitions from "../../components/Transition";

import "./gallery.css";

function Gallery({ url }) {
  return (
    <Transitions>
      <GridBanner mainIllustration={illustration}>
        <div className="banner-content">
          <Heading text="Gallery" />
        </div>
      </GridBanner>
      <div className="images-section">
        <div className="images-section__heading">
          Explore Our Club's Moments
        </div>
        <div className="image-grid">
          <ImageCard url={CardsImage} />
          <ImageCard url={CardsImage} />
          <ImageCard url={CardsImage} />
          <ImageCard url={CardsImage} />
          <ImageCard url={CardsImage} />
          <ImageCard url={CardsImage} />
          <ImageCard url={CardsImage} />
        </div>
      </div>
    </Transitions>
  );
}

export default Gallery;
