import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <>
      <Hero />
      <div>
        <Highlights />
        {/* TODO: zamienić na organizacje */}
        {/* <Testimonials /> */}

        <Pricing />
        {/* <Divider />
        <FAQ /> */}
        <Divider />
        <Footer />
      </div>
    </>
  );
}
