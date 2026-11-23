import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result) {
      navigate("/");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <>
      <div className="login_contain">
        <div className="left_contain">
          <img src="/Images/registerImg.png" alt="" />
        </div>
        <div className="right_contain">
          <h1>Welcome</h1>
          <p className="login_with_email">Login with Email</p>
          <form className="login_form" onSubmit={handleLogin}>
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
            <p className="forgot">Forgot your password?</p>
            <button className="login_btn">Login</button>
          </form>
          {error && <p>{error}</p>}
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
          <p className="login_text">
            Don’t have account? <a href="/register">Register Now</a>
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

export default Login;
