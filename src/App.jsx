import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Techslider from "./components/techslider";

function App() {
  return (
    <main className="w-screen h-full px-20 bg-black text-white">
      <Hero />
      <AboutMe />
      <Techslider />
      <Projects />
    </main>
  );
}

export default App;
