import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" placeholder="Your name" />
          <br />
          <input type="password" />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>
          new to ema-jhon <Link to="/register">Create Account</Link>
        </p>
        <div>----------or---------</div>
        <button className="btn-regular" onClick={signInUsingGoogle}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
