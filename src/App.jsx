import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Sustainability from "./components/Sustainability";
import Services from "./components/Services";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { MessageCircle } from "lucide-react";

function App() {
  return (
    <div className="app">

      <LoadingScreen />

      <Navbar />

      <main>
        <Hero />
        <Properties />
        <About />
        <Sustainability />
        <Services />
        <Locations />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917200719143"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} strokeWidth={2} />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}

export default App;