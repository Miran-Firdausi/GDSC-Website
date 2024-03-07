import GridBanner from "@/components/GridBanner";
import Heading from "@/components/Heading";
import illustration from "@/assets/images/contact-page.png";
import Transitions from "../../components/Transition";
import "./contact.css";

function Contact() {
  return (
    <Transitions>
      <GridBanner mainIllustration={illustration}>
        <div className="banner-content">
          <Heading text="Contact Us" />
        </div>
      </GridBanner>
      <div className="contact-section">
        <div className="contact-section__heading">Have any questions?</div>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar__buttons">
              <span className="red-button"></span>
              <span className="yellow-button"></span>
              <span className="green-button"></span>
            </div>
          </div>
          <div className="url-bar"></div>
          <div className="window-body">
            <div className="form-container">
              <div className="form-heading">Connect with us</div>
              <form className="form">
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <textarea
                  row="1"
                  placeholder="Your message goes here ..."
                ></textarea>
                <button>Send your message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transitions>
  );
}

export default Contact;
