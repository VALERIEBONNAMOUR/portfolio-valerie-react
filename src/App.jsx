import Header from "./Components/Header/Header.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Skills from "./Components/Skills/Skills.jsx";  
import Projets from "./Components/Project/Project.jsx";
import Knowledge from "./Components/Knowledge/Knowledge.jsx";
import BackToTop from "./Components/BackToTop/BackToTop.jsx"; 

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projets />
      <Knowledge />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
