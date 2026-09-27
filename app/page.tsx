import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import LocalAttraction from "@/components/LocalAttraction";
import Visit from "@/components/Visit";
import WaterInfo from "@/components/WaterInfo";
import Disclaimer from "@/components/Disclaimer";
import Gallery from "@/components/Gallery";
import Share from "@/components/Share";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <LocalAttraction />
        <Visit />
        <WaterInfo />
        <Disclaimer />
        <Gallery />
        <Share />
      </main>
      <Footer />
    </>
  );
}
