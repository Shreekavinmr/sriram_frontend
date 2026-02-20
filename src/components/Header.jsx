import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

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

  return (
    <div className="header-wrapper">

      {/* ===== Scrolling Rate Bar ===== */}
      <div className="rate-bar">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <span className="gold-rate">GOLD 24K Rs.14,540</span>
          &nbsp; | &nbsp;
          <span className="gold-rate">GOLD 22K Rs.13,320</span>
          &nbsp; | &nbsp;
          <span className="gold-rate">GOLD 18K Rs.11,905</span>
          &nbsp; | &nbsp;
          <span className="silver-rate">SILVER Rs.365</span>
        </marquee>
      </div>

      {/* ===== Main Header ===== */}
      <header className="main-header">
        <div className="header-inner">

          {/* Logo */}
          <div className="logo">
            <span className="brand">Sri Ram</span>
            <span className="sub">JEWELLERS</span>
          </div>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {/* Navigation */}
          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>

            <a href="#">Home</a>

            {/* Desktop Dropdown */}
            <div className="dropdown desktop-only">
              <span className="drop-title">Products ▾</span>
              <div className="dropdown-content">
                {categories.map((item, index) => (
                  <a href="#" key={index}>{item}</a>
                ))}
              </div>
            </div>

            {/* Mobile Dropdown */}
            <div className="dropdown-mobile mobile-only">
              <span onClick={() => setProductOpen(!productOpen)}>
                Products ▾
              </span>
              <div className={`dropdown-mobile-content ${productOpen ? "show" : ""}`}>
                {categories.map((item, index) => (
                  <a href="#" key={index}>{item}</a>
                ))}
              </div>
            </div>

            <a href="#" className="highlight">New Arrivals ✨</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>

          </nav>

        </div>
      </header>

    </div>
  );
};

export default Header;