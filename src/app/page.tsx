
import Projects from "./Projects";
import Home from "./home";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Home />
      <Projects />
    </div>
  );
}
