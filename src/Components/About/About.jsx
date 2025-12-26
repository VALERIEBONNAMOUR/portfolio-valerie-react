import "./About.css";
import portrait from "../../assets/portrait.webp";


const Apropos = () => {
  return (
    <div id="about" className="apropos">
      <div className="apropos-container">
        <img
          src={portrait}
          alt="Portrait"
          className="apropos-portrait"
        />

        <div className="apropos-text">
          <h2>PRESENTATION</h2>
          <p>
            Avec une expérience solide en communication digitale et marketing,
            j’ai choisi d’élargir mon champ de compétences en me spécialisant
            dans le développement web. Attirée par un secteur en constante
            évolution, je conçois des solutions digitales alliant performance,
            esthétique et cohérence stratégique. Mon objectif : accompagner
            les entreprises avec une approche globale, capable de répondre
            efficacement à l’ensemble de leurs enjeux digitaux.
          </p>
        </div>

        <a
          href="/CV_Valerie_Bonnamour.pdf"
          download="CV_Valerie_Bonnamour.pdf"
          className="cv-button"
        >
          CV
        </a>
  </div>
    </div>
  );
};


export default Apropos;
