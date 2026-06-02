import Hero from "./components/Home/Hero";
import Stats from "./components/Home/Stats";
import Contact from "./components/Home/Contact";
import About from "./components/Home/About";
import { Services } from "./components/Home/Services";
import WhatsAppSection from "./components/Home/WhatsAppSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhatsAppSection/>
      <Contact/>
    </div>
  );
}
