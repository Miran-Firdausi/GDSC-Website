import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./scroll-to-top.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <button className="scroll-to-top" onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  ) : null;
};

export default ScrollTopButton;
