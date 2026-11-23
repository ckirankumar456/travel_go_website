const reviews = [
  {
    id: 1,
    name: "John Deep",
    role: "Customer",
    image: "/Images/fansImg1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias et, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit rerum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
  },
  {
    id: 2,
    name: "Ally Gomez",
    role: "Customer",
    image: "/Images/fansImg2.png",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias et, explicabo provident hic distinctio molestias placeat suscipit rerum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
  },
  {
    id: 3,
    name: "Alex Bogg",
    role: "Customer",
    image: "/Images/fansImg3.png",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias et, explicabo provident hic distinctio molestias placeat suscipit rerum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
  },
];

function Reviews() {
  return (
    <div className="fans_section">
      <div className="fans_container">
        <div className="fans_heading">
          <span className="fans_badge">Fan Love</span>
          <h2>What our fans say about us</h2>
        </div>
        <div className="fans_reviews">
          {reviews.map((item) => (
            <div className="review_card" key={item.id}>
              <p className="review_text">{item.review}</p>
              <div className="review_user">
                <img src={item.image} alt={item.name} />
                <div className="user_details">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="review_dots">
          <span className="active_dot"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
