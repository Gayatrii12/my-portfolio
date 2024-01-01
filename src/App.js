import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Eduction from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import Timeline from "./components/timeline";

export default function App() {
  return (
    <div class="bg-black">
      {/* <Navbar /> */}
      <Hero />
      <About />
      {/* <Eduction /> */}
      <Timeline />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}
