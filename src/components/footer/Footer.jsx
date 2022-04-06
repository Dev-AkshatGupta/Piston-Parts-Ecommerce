import React from "react";
import "./footer.css";
import { Github } from "../../IconsAndAssets/Icons/Github";
import { Twitter } from "../../IconsAndAssets/Icons/Twitter";
import { LinkedIn } from "../../IconsAndAssets/Icons/LinkedIn";
function Footer() {
  return (
    <footer className="footer">
      <span className="col">
        <h3 className="col-title">Info</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="#">Formats</a>
            </li>
            <li>
              <a href="#">Compression</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </nav>
      </span>

      <span className="col">
        <h3 className="col-title">Transactions</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Exchange</a>
            </li>
            <li>
              <a href="#">Refunds</a>
            </li>
          </ul>
        </nav>
      </span>

      <span className="col">
        <h3 className="col-title">Company</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </nav>
      </span>

      <span className="col">
        <div className="subscribe-form-holder">
          <h3 className="form-title">Subscribe to our email newsletter</h3>
          <form action="#" className="subscribe-form">
            <input
              type="email"
              name="email"
              className="email subscribe-input"
              autoComplete="off"
              placeholder="Your email"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
        <div className="social-media">
          <h3 className="social-col-title">Follow us</h3>
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/Dev-AkshatGupta"
                target="_blank"
                className="github"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Akshat86604233"
                target="_blank"
                className="twitter"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/akshat-gupta-257914157/"
                className="linkedIn"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </span>
    </footer>
  );
}

export { Footer };
