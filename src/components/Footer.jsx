import "./Footer.css";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "Silver Return Gifts",
    "Silver Lamps",
    "Silver Plates",
    "Silver Bowls",
    "Silver Italian Collection",
    "Silver Kids Collection",
    "Silver Bracelet",
    "Silver Toerings",
    "Silver Anklets",
    "Silver Coins",
    "Silver 92.5 Idols",
    "Silver Signature Collections",
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* SHOP BY CATEGORY */}
          <div className="footer-col">
            <h4>SHOP BY CATEGORY</h4>
            <ul>
              {visibleCategories.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="footer-col">
            <h4>CUSTOMER SERVICES</h4>
            <ul>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Return & Refund</li>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* HELP & SUPPORT */}
          <div className="footer-col">
            <h4>HELP & SUPPORT</h4>
            <p><FaPhoneAlt /> +91 93636 05862</p>
            <p><FaEnvelope /> onlinesales@sriramjewellers.com</p>
            <p>
              <FaMapMarkerAlt />
              121, Bazar Road, Agraharam <br />
              Salem – 636001
            </p>
          </div>

          {/* BRAND */}
          <div className="footer-col brand-col">
            <h2>SRI RAM</h2>
            <span>JEWELLERS</span>

            <h4 className="signup-title">SIGN UP & SAVE</h4>
            <p>New arrivals, offers & updates.</p>

            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />

            <div className="social-icons">
              <FaInstagram />
              <FaFacebookF />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Sri Ram Jewellers – All Rights Reserved
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919363605862"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp /> Chat
      </a>

      {/* Share */}
      <div className="share-float">
        <FaShareAlt />
        <span>Share</span>
      </div>
    </>
  );
};

export default Footer;