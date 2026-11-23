import "./Home.css";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import FutureTour from "../Components/FutureTour";
import Experience from "../Components/Experience";
import Gallary from "../Components/Gallary";
import Reviews from "../Components/Reviews";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <FutureTour />
      <Experience />
      <Gallary />
      <Reviews />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
