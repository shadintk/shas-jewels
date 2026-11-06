
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>SHAS</h2>
          <span>JEWELS</span>
          <p>
            Discover timeless beauty and elegant jewellery
            for every special moment.
          </p>
        </div>

        <div className="footer-column">
          <h3>SHOP</h3>
          <a href="#collections">Earrings</a>
          <a href="#collections">Rings</a>
          <a href="#collections">Necklaces</a>
          <a href="#collections">Bangles</a>
          <a href="#collections">Bracelets</a>
        </div>

        <div className="footer-column">
          <h3>INFORMATION</h3>
          <a href="#about">About Us</a>
          <a href="#footer">Contact Us</a>
          <a href="#footer">Shipping Policy</a>
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Terms & Conditions</a>
        </div>

        <div className="footer-column">
          <h3>GET IN TOUCH</h3>
          <p>For enquiries and assistance</p>
          <a href="mailto:info@shasjewels.com">Email Us</a>
          <p>Follow us on social media</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SHAS JEWELS. All Rights Reserved.</p>
        <p>Designed with elegance.</p>
      </div>
    </footer>
  );
}

export default Footer;
