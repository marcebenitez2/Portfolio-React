import "./App.css";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Techslider from "./components/techslider";


function App() {
  return (
    <main className="w-screen h-full px-20 bg-black text-white flex flex-col gap-8 pb-36  overflow-x-hidden lgn:pb-10 smn:px-2">
      <Hero/>
      <AboutMe/>
      <Techslider/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
