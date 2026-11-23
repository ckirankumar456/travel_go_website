function TourSearch() {
  return (
    <div className="tour_search_section">
      <div className="tour_search_container">
        <div className="tour_search_item">
          <i className="fa-solid fa-location-dot"></i>
          <div className="tour_search_content">
            <h4>Location</h4>
            <input type="text" placeholder="Where are you going?" />
          </div>
        </div>
        <div className="tour_search_item">
          <i className="fa-solid fa-route"></i>
          <div className="tour_search_content">
            <h4>Distance</h4>
            <input type="number" placeholder="Distance km" />
          </div>
        </div>
        <div className="tour_search_item">
          <i className="fa-solid fa-users"></i>
          <div className="tour_search_content">
            <h4>Max People</h4>
            <input type="number" placeholder="0" />
          </div>
        </div>
        <button className="tour_search_btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default TourSearch;
