import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechGrid from "@/components/TechGrid";
import Projects from "@/components/Projects";
import UXUI from "@/components/UXUI";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="bg-[#08080E] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechGrid />
        <Projects />
        <UXUI />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
