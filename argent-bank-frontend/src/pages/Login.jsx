import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/user.action";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../main.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isLoggedIn, user } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  
  useEffect(() => {
    if (isLoggedIn && user) {
      navigate("/profile");
    }
  }, [isLoggedIn, user, navigate]);


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </main>
  );
}

export default Login;
