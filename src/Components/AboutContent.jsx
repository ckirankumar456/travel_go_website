function AboutContent() {
  return (
    <div className="about_content_section">
      <div className="about_content_container">
        <div className="about_text_content">
          <div className="about_info">
            <h2>
              Who <span>We Are?</span>
            </h2>
            <p>
              We're all about creating unforgettable experiences for our guests.
              Our journey began with a simple passion for exploring the beauty
              of the World.
            </p>
          </div>
          <div className="about_info">
            <h2>
              Our <span>Mission</span>
            </h2>
            <p>
              We believe that travel is not just about visiting new places, but
              about immersing yourself in new cultures, connecting with nature,
              and making memories that last a lifetime.
            </p>
          </div>
        </div>
        <div className="about_content_image">
          <img src="/Images/aboutcontentImg.png" alt="Travel destination" />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
