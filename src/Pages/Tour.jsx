import AllTours from "../Components/AllTours";
import Footer from "../Components/Footer";
import FeaturedTours from "../Components/FuturedTours";
import TourSearch from "../Components/TourSearch";
import "./Tour.css";

function Tour() {
  return (
    <>
      <AllTours />
      <TourSearch />
      <FeaturedTours />
      <Footer />
    </>
  );
}

export default Tour;
