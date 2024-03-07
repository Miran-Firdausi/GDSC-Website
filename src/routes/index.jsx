import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Teams from "@/pages/Teams";

const routes = [
  {
    lable: "About",
    path: "/about-us",
    requireAuth: false,
    render: <About />,
  },
  {
    lable: "Teams",
    path: "/teams",
    requireAuth: false,
    render: <Teams />,
  },
  {
    lable: "Contact",
    path: "/contact-us",
    requireAuth: false,
    render: <Contact />,
  },
  {
    lable: "Gallery",
    path: "/gallery",
    requireAuth: false,
    render: <Gallery />,
  },
  {
    lable: "Events",
    path: "/events",
    requireAuth: false,
    render: <Events />,
  },
  {
    lable: "Home",
    path: "/",
    requireAuth: false,
    render: <Home />,
  },
];

export default routes;
