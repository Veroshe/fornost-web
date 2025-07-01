import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Socials from "./components/Socials";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <>
      <div className="back-top"></div>
      <div className="back"></div>
      <Hero />
      <div className="content-homepage">
        <Highlights />
        <Features />

        <Socials />

        <FAQ />
        <Footer />
      </div>
    </>
  );
}
