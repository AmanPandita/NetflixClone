import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await response.json(); // Parse it as JSON
          console.log("Login successful:", data);
          navigate('/home');
        } else {
          const text = await response.text(); // Parse it as text
          console.log("Login successful:", text);
          navigate('/home');
        }
      } else {
        console.log("Login failed");
        alert("Login failed");
        // Handle login failure here
      }
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  };
  

  return (
    <>
      <div className="upper">
        <div className="logo">
          <a href="#">
            <img src="images/Netflix-Logo.png" className="img-logo" />
          </a>
        </div>
        <div className="login-div">
          <form className="login" onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="input-text">
              <input
                type="text"
                id="inputEmail"
                name="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="warning-input" id="warningEmail">
                Please enter a valid email or phone number.
              </div>
            </div>

            <div className="input-text">
              <input
                type="password"
                id="inputPassword"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="warning-input" id="warningPassword">
                Your password must contain between 4 and 60 characters.
              </div>
            </div>

            <div>
              <button type="submit" className="signin-button">
                Sign In
              </button>
            </div>
            <div className="remember-flex">
              <div>
                <input type="checkbox" />
                <label className="color_text">Remember me</label>
              </div>
              <div className="help">
                <a className="color_text" href="#">
                  Need help?
                </a>
              </div>
            </div>
            <div className="login-face">
              <img src="images/fb-icon.png" height="20" />
              <a href="#" className="color_link log_face">
                Login with Facebook
              </a>
            </div>
            <div className="new-members">
              New to Netflix?{" "}
              <a href="#" className="signup-link">
                Sign up now
              </a>
              .
            </div>
            <div className="protection color_link help">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-width">
          Questions? Call{" "}
          <a href="tel:1-844-542-4813" className="tel-link">
            1-844-542-4813
          </a>
          <div>
            <ul className="bottom-flex">
              <li className="list-bottom">
                <a href="#" className="link-bottom">
                  FAQ
                </a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">
                  Help Center
                </a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">
                  Terms of Use
                </a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">
                  Privacy
                </a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">
                  Cookie Preferences
                </a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">
                  Corporate information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <select className="fa select-language">
              <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
              <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
