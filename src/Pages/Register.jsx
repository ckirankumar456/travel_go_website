import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    });
    navigate("/login");
  };

  return (
    <>
      <div className="register_contain">
        <div className="left_contain">
          <img src="/Images/registerImg.png" alt="" />
        </div>
        <div className="right_contain">
          <h1>CREATE AN ACCOUNT</h1>
          <p className="register_with_email">
            By creating an account, you agree to our Privacy policy and Terms of
            use.
          </p>
          <form className="register_form" onSubmit={handleRegister}>
            <div className="name_fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="register_btn" onClick={() => navigate("/login")}>
              Create Account
            </button>
          </form>
          <div className="or_section">
            <span></span>
            OR
            <span></span>
          </div>
          <div className="social_buttons">
            <button>
              <img src="/Images/Google.png" alt="Google" />
            </button>
            <button>
              <img src="/Images/facebook.png" alt="Facebook" />
            </button>
            <button>
              <img src="/Images/apple.png" alt="Apple" />
            </button>
          </div>
          <p className="register_text">
            Already have an account? <a href="/register">Login</a>
          </p>
          <div className="bottom_images">
            <img src="/Images/thaje.png" alt="" />
            <img src="/Images/thaje1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
