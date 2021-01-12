import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#2727e6"
              }
            }
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Timeline />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
