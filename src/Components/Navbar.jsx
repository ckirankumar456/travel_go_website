import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="nav_contain">
      <div className="logo">
        <img src="/Images/logo.png" alt="" />
      </div>
      <div className="link_contain">
        <img src="logo-pp.jpg.jpeg" alt="" className="logo" />
        <ul>
          <Link to="/" className="nav_link">
            Home
          </Link>
          <Link to="/about" className="nav_link">
            About
          </Link>
          <Link to="/tour" className="nav_link">
            Tour
          </Link>
          <div className="user_box">
            {user ? (
              <>
                <span className="user_name">{user.name}</span>
                <i className="fa-solid fa-circle-user profile_icon"></i>
              </>
            ) : (
              <>
                <Link to="/register" className="register_button">
                  Register
                </Link>
                <Link to="/login" className="login_button">
                  Login
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
