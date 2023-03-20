import Banner from "./Components/banner";
import Abtinfo from "./Components/abtinfo";
import Moreinfo from "./Components/moreinfo";
import Opportunity from "./Components/opportunity";
import Testimonial from "../Components/testimonial";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <Abtinfo />
      <Moreinfo />
      <Opportunity />
      <Testimonial />
    </div>
  );
};

export default About;
