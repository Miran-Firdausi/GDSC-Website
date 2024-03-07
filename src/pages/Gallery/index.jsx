import ImageCard from "./ImageCard";
import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import CardsImage from "@/assets/images/Group-photo.png";
import "./gallery.css";

function Gallery({ url }) {
  return (
    <>
      <GridBanner>
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
    </>
  );
}

export default Gallery;
