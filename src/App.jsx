import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Stack from "./components/stack";

function App() {
  return (
    <main className="w-screen h-full bg-black text-white px-44 xln:px-20 mdn:px-4">
      <Hero />
      <About/>
      <Experience/>
      <Stack/>
      <Contact/>
    </main>
  );
}

export default App;
