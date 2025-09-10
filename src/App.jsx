import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoleCards from "@/components/sections/RoleCards"; // 👈 nuevo
import About from "@/components/About";
import TechGrid from "@/components/TechGrid";
import Projects from "@/components/Projects";
import UXUI from "@/components/UXUI";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen w-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-start w-full">
  <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-600 overflow-hidden relative max-w-screen-3xl mx-auto">
          <Navbar />
          <main>
            <Hero />
            <RoleCards />
            <About />
            <TechGrid />
            <Projects />
            <UXUI />
            <Resume />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
