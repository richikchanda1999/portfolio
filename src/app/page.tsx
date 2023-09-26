import Intro from "./Sections/Intro";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
