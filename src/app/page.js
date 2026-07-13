import Hero from "./components/Home/Hero";
import Stats from "./components/Home/Stats";
import Contact from "./components/Home/Contact";
import About from "./components/Home/About";
import { Services } from "./components/Home/Services";
import WhatsAppSection from "./components/Home/WhatsAppSection";
import HowWeShowUp from "./components/Home/HowWeShowUp";
import Work from "./components/Home/Work";
import FAQ from "./components/Home/FAQ";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Services/>
      <Work/>
      <HowWeShowUp/>
      <FAQ/>
      <WhatsAppSection/>
      <Contact/>
    </div>
  );
}
