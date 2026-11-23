const tours = [
  {
    id: 1,
    name: "Dubai",
    country: "UAE",
    image: "/Images/tourImg1.png",
    type: "large",
  },
  {
    id: 2,
    name: "Bali",
    country: "INDONESIA",
    image: "/Images/tourImg2.png",
    type: "large",
  },
  {
    id: 3,
    name: "Australia",
    country: "AUSTRALIA",
    image: "/Images/tourImg3.png",
    type: "small",
  },
  {
    id: 4,
    name: "Indonesia",
    country: "INDONESIA",
    image: "/Images/tourImg4.png",
    type: "small",
  },
  {
    id: 5,
    name: "China",
    country: "CHINA",
    image: "/Images/tourImg5.png",
    type: "small",
  },
  {
    id: 6,
    name: "Big Ben",
    country: "LONDON",
    image: "/Images/tourImg6.png",
    type: "large",
  },
  {
    id: 7,
    name: "Paris",
    country: "FRANCE",
    image: "/Images/tourImg7.png",
    type: "large",
  },
  {
    id: 8,
    name: "Maldives",
    country: "MALDIVES",
    image: "/Images/tourImg8.png",
    type: "small",
  },
  {
    id: 9,
    name: "Thailand",
    country: "THAILAND",
    image: "/Images/tourImg9.png",
    type: "small",
  },
  {
    id: 10,
    name: "Philippines",
    country: "PHILIPPINES",
    image: "/Images/tourImg10.png",
    type: "small",
  },
];

function FeaturedTours() {
  return (
    <section className="featured_tours_section">
      <div className="featured_tours_container">
        <div className="featured_tours_heading">
          <h2>
            Our Featured <span>Tours</span>
          </h2>
        </div>
        <div className="featured_tours_grid">
          {tours.map((tour) => (
            <div className={`tour_card ${tour.type}`} key={tour.id}>
              <img src={tour.image} alt={tour.country} />
              <div className="tour_card_content">
                <h3>{tour.name}</h3>
                <p>{tour.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="load_more_container">
          <button className="load_more_btn">Load More</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;
