import Banner from "./Components/banner";
import About from "./Components/about";
import Beaware from "./Components/beaware";
import Blogs from "./Components/blogs";
import Swelling from "./Components/swelling";
import Events from "./Components/events";
import Testimonial from "./Components/testimonial";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <About />
      <Beaware />
      <Blogs />
      <Swelling />
      <Events />
      <Testimonial />
    </div>
  );
};

export default Home;
