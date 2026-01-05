import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="header__logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#savoir-faire">Savoir-faire</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
