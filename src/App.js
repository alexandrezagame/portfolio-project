import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
