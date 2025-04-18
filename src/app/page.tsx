import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        <Hero />
        <Work />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
}
