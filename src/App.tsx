import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";

function App() {
  return (
    <div className="min-h-screen font-sans relative transition-colors duration-300">
      <ShaderBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
