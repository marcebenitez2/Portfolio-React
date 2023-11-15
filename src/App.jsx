import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Techslider from "./components/techslider";

function App() {
  return (
    <main className="w-screen h-full px-20 bg-black text-white flex flex-col gap-8 pb-36">
      <Hero />
      <AboutMe />
      <Techslider />
      <Projects />
      <Contact/>
    </main>
  );
}

export default App;
