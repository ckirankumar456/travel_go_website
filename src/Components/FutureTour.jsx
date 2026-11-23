function FutureTour() {
  return (
    <>
      <div className="featured_contain">
        <div className="featured_title">
          <button>Explore</button>
          <h2>Our featured tours</h2>
        </div>
        <div className="featured_grid">
          <div className="tour_card big_ben">
            <img src="/Images/londonImag.png" alt="London" />
          </div>
          <div className="tour_card bali">
            <img src="/Images/indonesiaImg.png" alt="Bali" />
          </div>
          <div className="tour_card sydney">
            <img src="/Images/australiaImg.png" alt="Sydney" />
          </div>
          <div className="tour_card dubai">
            <img src="/Images/usaImg.png" alt="Dubai" />
          </div>
          <div className="tour_card thailand">
            <img src="/Images/thailandImg.png" alt="Thailand" />
          </div>
          <div className="tour_card paris">
            <img src="/Images/franceImg.png" alt="Paris" />
          </div>
          <div className="tour_card china">
            <img src="/Images/chinamg.png" alt="China" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureTour;
