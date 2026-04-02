import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import VerticalNav from "./components/VerticalNav";

function App() {
  return (
    <>
      <VerticalNav />
      <Header />
      <AboutMe />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
