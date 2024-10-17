import Carousel from "../../src/components/Carousel";
import { services } from "../../src/components/CarouselData";
import "../styles/Home.css";

const Home = () => {
  return (

    <>
      <div className="App">
       <Carousel images={services} />
      </div>

    </>
  );
};

export default Home;
