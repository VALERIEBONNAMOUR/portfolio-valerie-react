import "./Footer.css";
import linkedinIcon from "../../assets/linkedin.png"; 
import githubIcon from "../../assets/github.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© Copyright 2025 – Valérie BONNAMOUR. Tous droits réservés.</p>
      <div className="footer__icons">
        <a
          href="https://www.linkedin.com/in/valerie-bonnamour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/valerie-bonnamour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
