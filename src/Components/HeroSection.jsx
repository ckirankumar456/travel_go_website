function HeroSection() {
  return (
    <>
      <div className="home_hero_contain">
        <div className="home_hero_left">
          <div className="world_img">
            <h3>Know Before You Go</h3>
            <img src="/Images/world_img.png" alt="" />
          </div>
          <h1>Traveling opens the door to creating memories</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae
            tempora dignissimos, animi praesentium molestias perferendis porro
            expedita delectus. Soluta natus porro.
          </p>
        </div>
        <div className="image_contain">
          <div className="image_box image_one">
            <img src="/Images/main1_img.png" alt="Travel 1" />
          </div>
          <div className="image_box image_two">
            <img src="/Images/video_img.png" alt="Travel 2" />
          </div>
          <div className="image_box image_three">
            <img src="/Images/main2_img.png" alt="Travel 3" />
          </div>
        </div>
      </div>
      <div className="search_bar">
        <div className="search_contain">
          <div className="search_item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h4>Location</h4>
              <p>Where are you going?</p>
            </div>
          </div>
          <div className="search_item">
            <i className="fa-solid fa-route"></i>
            <div>
              <h4>Distance</h4>
              <p>Distance km</p>
            </div>
          </div>
          <div className="search_item">
            <i className="fa-solid fa-users"></i>
            <div>
              <h4>Max People</h4>
              <p>0</p>
            </div>
          </div>
          <button className="search_btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
