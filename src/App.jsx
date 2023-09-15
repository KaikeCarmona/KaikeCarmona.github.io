import "./App.css";
import HomeLanding from "../src/components/Home/Home";
import AboutLanding from "./components/About/About";
import ProjectsLanding from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import ContactLanding from "../src/components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <HomeLanding />
        <AboutLanding />
        <ProjectsLanding />
        <Skills />
        <ContactLanding />
        <Footer />
      </div>

    </div>
  );
}

export default App;
