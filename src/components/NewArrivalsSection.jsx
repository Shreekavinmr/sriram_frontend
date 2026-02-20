import "./NewArrivalsSection.css";

const products = [
  { img: "/images/anklet.png", name: "Temple Silver Anklet" },
  { img: "/images/anklet2.png", name: "Floral Pattern Anklet" },
  { img: "/images/anklet3.png", name: "Bridal Silver Anklet" },
  { img: "/images/anklet4.png", name: "Oxidised Designer Anklet" },
];

const NewArrivalsSection = () => {
  return (
    <section className="new-arrivals">

      <div className="section-header">
        <h2>New Arrivals</h2>
        <p>Discover our latest handcrafted silver pieces.</p>
      </div>

      <div className="arrival-grid">
        {products.map((item, index) => (
          <div className="arrival-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>

    </section>
  );
};

export default NewArrivalsSection;