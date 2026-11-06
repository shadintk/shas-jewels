
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        Discover timeless elegance with SHAS JEWELS
      </div>

      <header className="header">
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <a href="#home" className="brand">
          <span className="brand-name">SHAS</span>
          <span className="brand-subtitle">JEWELS</span>
        </a>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#collections" onClick={closeMenu}>COLLECTIONS</a>
          <a href="#new-arrivals" onClick={closeMenu}>NEW ARRIVALS</a>
          <a href="#bestsellers" onClick={closeMenu}>BESTSELLERS</a>
          <a href="#about" onClick={closeMenu}>ABOUT US</a>
        </nav>

        <div className="header-icons">
          <a href="#collections" aria-label="Search">⌕</a>
          <a href="#footer" aria-label="Account">♙</a>
          <a href="#collections" aria-label="Wishlist">♡</a>
          <a href="#collections" aria-label="Shopping bag">♧</a>
        </div>
      </header>
    </>
  );
}

export default Header;
