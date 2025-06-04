import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ModalFornost from "./components/Modal";

export default function Homepage() {
  return (
    <>
      <div className="back-top"></div>
      <div className="back"></div>
      <Hero />
      <ModalFornost />
      <div>
        <Highlights />
        <Features />
        {/* TODO: zamienić na organizacje */}
        {/* <Testimonials /> */}

        <Pricing />

        <FAQ />
        <Footer />
      </div>
    </>
  );
}
