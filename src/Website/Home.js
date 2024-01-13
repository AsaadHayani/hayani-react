import Header from "./Header";
import About from "./About";
import OurTeam from "./OurTeam";
import Work from "./Work";
import Testimo from "./Testimo";
import Contact from "./Contact";
import { Footer } from "../exports";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <OurTeam />
      <Work />
      <Testimo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
