import "./CraftsmanshipSection.css";

const CraftsmanshipSection = () => {
  return (
    <section className="craft-section">

      <div className="craft-container">

        {/* LEFT IMAGE COLLAGE */}
        <div className="craft-gallery">

          <img src="/images/craft1.png" className="img img1" alt="craft1" />
          <img src="/images/craft2.png" className="img img2" alt="craft2" />
          <img src="/images/craft3.png" className="img img3" alt="craft3" />
          <img src="/images/craft4.png  " className="img img4" alt="craft4" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="craft-content">

          <span className="craft-tag">Our Heritage</span>

          <h2>
            A Legacy of Craftsmanship & Purity
          </h2>

          <div className="gold-line"></div>

          <p>
            Since 1998, Sri Ram Jewellers has blended traditional artistry
            with modern elegance. Every piece reflects heritage,
            precision, and timeless beauty.
          </p>

          <button className="craft-btn">Discover Our Story</button>

        </div>

      </div>

    </section>
  );
};

export default CraftsmanshipSection;