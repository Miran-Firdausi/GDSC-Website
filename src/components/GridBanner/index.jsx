import "./grid-banner.css";
import illustration1 from "@/assets/images/illustration1.png";
import illustration2 from "@/assets/images/illustration2.png";
import illustration3 from "@/assets/images/illustration3.png";
import illustration4 from "@/assets/images/illustration4.png";
import illustration5 from "@/assets/images/contact-us.png";

function GridBanner({ children }) {
  return (
    <div className="grid-banner">
      <div className="illustrations">
        <img className="illustration-top-left" src={illustration1} />
        <img className="illustration-center-right" src={illustration2} />
        <img className="illustration-center-left" src={illustration3} />
        <img className="illustration-top-right" src={illustration4} />
        <div className="illustration-bottom-center">
          <img className="illustration-main" src={illustration5} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default GridBanner;
