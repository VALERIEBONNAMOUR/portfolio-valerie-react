import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__title">
        <span className="footer__bar"></span>
        <h2>CONTACT</h2>
      </div>

      <div className="footer__content">
        <div className="footer__left">
          <p>Pour me contacter, cliquez sur l'icône ci-dessous :</p>
          <a
            href="mailto:bvmarketing@orange.fr"
            aria-label="Envoyer un email à Valérie Bonnamour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="far fa-envelope social-icon"></span>
          </a>
        </div>

        <div className="footer__right">
          <p>Retrouvez-moi également sur les sites :</p>
          <div className="footer__icons">
            <a
              href="https://www.linkedin.com/in/val%C3%A9rie-bonnamour-168b94128/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Valérie Bonnamour (s’ouvre dans un nouvel onglet)"
            >
              <span className="fab fa-linkedin social-icon"></span>
            </a>
            <a
              href="https://github.com/VALERIEBONNAMOUR?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub de Valérie Bonnamour (s’ouvre dans un nouvel onglet)"
            >
              <span className="fab fa-github social-icon"></span>
            </a>
          </div>
        </div>
      </div>

      <p className="footer__copyright">
        © Copyright 2025 – Valérie BONNAMOUR. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
