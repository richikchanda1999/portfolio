
import Contact from "./Contact";
import Projects from "./Projects";
import Work from "./Work";
import Home from "./home";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-16">
      <Home />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}
