import { useState } from "react";
import "./Knowledge.css";
import Logo from "../../assets/logo.png";

const skills = [
  {
    title: "WEB",
    content:
      "Je conçois des sites web performants, esthétiques et optimisés pour le référencement naturel. Chaque projet est pensé pour offrir une expérience utilisateur fluide et convertir vos visiteurs en opportunités.",
  },
  {
    title: "MARKETING DIGITAL",
    content:
      "Je développe des stratégies de marketing digital sur-mesure, alignées avec vos objectifs et votre cible. L’objectif : améliorer votre visibilité, renforcer votre positionnement et générer des résultats mesurables.",
  },
  {
    title: "PRINT",
    content:
      "Je crée des supports print impactants qui valorisent votre identité et renforcent votre message. Du concept à la réalisation, chaque support est conçu pour marquer les esprits et assurer une communication cohérente.",
  },
  {
    title: "SOCIAL MEDIA",
    content:
      "Je construis et anime votre présence sur les réseaux sociaux avec une stratégie éditoriale adaptée à votre marque. Contenus, visuels et messages sont pensés pour engager votre communauté et développer votre notoriété.",
  },
];

export default function SavoirFaire() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkill = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="savoir-faire" id="savoir-faire">
        <div className="logo-container">
    <img src={Logo} alt="Logo BV Marketing" className="logo" />
  </div>
   <div className="intro">
  <p>
    “Je vous accompagne dans votre communication digitale, en
    construisant des stratégies sur-mesure adaptées à vos objectifs, vos
    moyens et votre potentiel.”
  </p>
  <p>
    Du site web aux réseaux sociaux, chaque étape est pensée pour mettre
    votre marque sur le devant de la scène et créer une relation durable
    avec votre public.”
  </p>
</div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${
              activeIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleSkill(index)}
          >
            <h3>{skill.title}</h3>

            <div className="skill-content">
              <p>{skill.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
