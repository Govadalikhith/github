import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <h2 className="heading">Login</h2>
          <p className="subtext">Sign in to continue</p>

          <form className="form">
            
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button className="btn">Login</button>
          </form>

          <p className="footer">
            Don't have an account?{" "}
            <a href="#">Register</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login