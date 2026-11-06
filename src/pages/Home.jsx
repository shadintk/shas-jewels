
const categories = [
  {
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
  },
  {
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700"
  },
  {
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700"
  },
  {
    name: "Bangles",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700"
  },
  {
    name: "Pendants",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700"
  },
  {
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700"
  }
];

const products = [
  {
    name: "Elegant Gold Earrings",
    category: "EARRINGS",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
  },
  {
    name: "Classic Diamond Ring",
    category: "RINGS",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700"
  },
  {
    name: "Traditional Gold Necklace",
    category: "NECKLACES",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700"
  },
  {
    name: "Premium Bracelet",
    category: "BRACELETS",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700"
  }
];

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">THE ART OF ELEGANCE</p>

          <h1>
            Jewellery that
            <br />
            tells your story.
          </h1>

          <p className="hero-description">
            Celebrate every moment with jewellery that reflects
            your unique beauty and timeless style.
          </p>

          <a href="#collections" className="primary-button">
            EXPLORE COLLECTION
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200"
            alt="Elegant jewellery collection"
          />
        </div>
      </section>

      <section className="categories section-padding" id="collections">
        <div className="section-heading">
          <p className="section-label">FIND YOUR STYLE</p>
          <h2>Explore Our Collections</h2>
          <p>Discover something beautiful for every occasion.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a href="#new-arrivals" className="category-card" key={category.name}>
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              <span>EXPLORE COLLECTION →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="new-arrivals section-padding" id="new-arrivals">
        <div className="section-heading">
          <p className="section-label">JUST ARRIVED</p>
          <h2>New Arrivals</h2>
          <p>Fresh designs to make every moment special.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">NEW</span>
                <button
                  className="wishlist-button"
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>
              </div>

              <div className="product-info">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="center-button">
          <a href="#collections" className="outline-button">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-image">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1000"
            alt="Beautiful jewellery"
          />
        </div>

        <div className="promo-content">
          <p className="section-label">MADE FOR YOUR MOMENTS</p>
          <h2>Elegance in every detail.</h2>
          <p>
            From everyday essentials to unforgettable celebrations,
            find jewellery that makes every moment shine.
          </p>
          <a href="#collections" className="primary-button">
            DISCOVER MORE
          </a>
        </div>
      </section>

      <section className="bestsellers section-padding" id="bestsellers">
        <div className="section-heading">
          <p className="section-label">CUSTOMER FAVOURITES</p>
          <h2>Our Bestsellers</h2>
          <p>Explore designs loved by our customers.</p>
        </div>

        <div className="bestseller-banner">
          <div>
            <p>THE SHAS EXPERIENCE</p>
            <h2>Beauty that stays timeless.</h2>
            <a href="#collections" className="light-button">
              SHOP COLLECTION
            </a>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="section-label">WELCOME TO SHAS</p>
        <h2>More than jewellery. A reflection of you.</h2>
        <p>
          At SHAS JEWELS, we believe every piece of jewellery
          carries a story. Explore beautiful designs made to
          celebrate your style, your memories and your special moments.
        </p>
      </section>
    </>
  );
}

export default Home;
