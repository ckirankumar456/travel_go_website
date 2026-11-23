const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_logo">
          <img src="/Images/logo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            distinctio!
          </p>
          <div className="footer_social">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <small>© 2024. Vgpin_website. All Rights Reserved</small>
        </div>
        <div className="footer_links">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Tours</a>
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
        <div className="footer_contact">
          <h3>Contact</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            <span>Address : Lorem</span>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <span>Email : xyz@gmail.com</span>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span>Phone : 00022200222</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
