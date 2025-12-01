import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import OptimizedMineRunner from "./components/OptimizedMineRunner";

// Set to false to completely disable MineRunner for better performance
const ENABLE_MINERUNNER = true;

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Timeline />
      <Contact />
      {ENABLE_MINERUNNER && <OptimizedMineRunner />}
    </>
  );
}

export default App;
