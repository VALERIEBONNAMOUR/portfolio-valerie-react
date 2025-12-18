const NotFound = () => {
  return (
    <section style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>404</h1>
      <p>Oups ! La section que vous cherchez n’existe pas.</p>
      <a href="#home" style={{ color: "#007bff", textDecoration: "underline" }}>
        Retour à l’accueil
      </a>
    </section>
  );
};

export default NotFound;
