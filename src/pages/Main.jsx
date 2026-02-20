import CraftsmanshipSection from "../components/CraftsmanshipSection";
import Hero from "../components/Hero";
import NewArrivalsSection from "../components/NewArrivalsSection";
import SilverAnkletsSection from "../components/SilverAnkletsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Hero />

      {/* Explore Section */}
      <section className="explore-section">
        <h2>Explore Our Collections</h2>
        <p>
          Elegance meets craftsmanship in every piece.
          Find the style that reflects your story.
        </p>
      </section>

      {/* Categories Section */}
      <section className="category-section">
        <div className="category-card">
          <img src="/images/sample1.png" alt="Silver Idols" />
          <h3>Silver 92.5 Idols</h3>
        </div>

        <div className="category-card">
          <img src="/images/sample2.png" alt="Italian Collection" />
          <h3>Italian Collections</h3>
        </div>

        <div className="category-card">
          <img src="/images/sample3.png" alt="Silver Lamps" />
          <h3>Silver Lamps</h3>
        </div>

        <div className="category-card">
          <img src="/images/sample4.png" alt="Silver Anklets" />
          <h3>Silver Anklets</h3>
        </div>
      </section>
      <WhyChooseUs/>
      <NewArrivalsSection/>
      <CraftsmanshipSection/>
      <SilverAnkletsSection />
      <TestimonialsSection />
    </>
  );
};

export default Main;