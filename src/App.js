import Navbar from './Navbar';
import About from './About';
import Eduction from './Education';
import Skills from "./Skills";
import Projects from './Projects';
import Timeline from './components/timeline';

export default function App() {
  return (
    <div class="bg-black">
      {/* <Navbar /> */}
      <About />
      <Eduction />
      <Timeline />
      <Skills />
      <Projects />
    </div>
    // <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    //   <div class="shrink-0">
    //     <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
    //   </div>
    //   <div>
    //     <div class="text-6xl font-medium text-yellow">ChitChat</div>
    //     <p class="text-slate-500">You have a new message!</p>
    //   </div>
    // </div>
  );
}
