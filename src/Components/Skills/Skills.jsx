import "./Skills.css";
import skillsImage from "../../assets/skills.webp";


const Skills = () => {
  return (
    <section className="skills" id="competences">
      <h2 className="skills-title">Compétences</h2>

      <div className="skills-container">
        {/* Partie gauche */}
        <div className="skills-column">
          <h3>Technologies</h3>
          <img
             src={skillsImage}
            alt="Technologies"
            className="skills-image"
          />
        </div>

        {/* Séparateur */}
        <div className="skills-divider"></div>

        {/* Partie droite */}
        <div className="skills-column">
          <h3>Soft Skills</h3>
          <ul className="soft-skills">
            <li>Adaptabilité</li>
            <li>Curiosité</li>
            <li>Aisance relationnelle</li>
            <li>Capacité d'analyse</li>
            <li>Créativité</li>
            <li>Réactivité</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
