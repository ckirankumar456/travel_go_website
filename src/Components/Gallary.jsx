function Gallary() {
  return (
    <>
      <div className="gallery-section">
        <div className="gallery-header">
          <span className="badge">Gallery</span>
          <h2>Visit our customers tour gallery</h2>
        </div>
        <div className="masonry-gallery">
          <div className="gallery-item item-1">
            <img src="/Images/gallery1.png" alt="Mountain hiker" />
          </div>
          <div className="gallery-item item-2">
            <img src="/Images/gallery2.png" alt="Blue lagoon" />
          </div>
          <div className="gallery-item item-3">
            <img src="/Images/gallery3.png" alt="Treehouse view" />
          </div>
          <div className="gallery-item item-4">
            <img src="/Images/gallery4.png" alt="Palm beach" />
          </div>
          <div className="gallery-item item-5">
            <img src="/Images/gallery5.png" alt="River canyon" />
          </div>
          <div className="gallery-item item-6">
            <img src="/Images/gallery6.png" alt="Overwater bungalows" />
          </div>
          <div className="gallery-item item-7">
            <img src="/Images/gallery7.png" alt="Church with camera" />
          </div>
          <div className="gallery-item item-8">
            <img src="/Images/gallery8.png" alt="Boat cove" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallary;
