import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Socials from "./components/Socials";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import programImage from "../assets/Program_Fornostu_2025.jpg";

export default function Homepage() {
  return (
    <>
      <div className="back-top"></div>
      <div className="back"></div>
      <Hero />
      <div className="content-homepage">
        <div
          className="program-image-container"
          style={{
            backgroundImage: `url(${programImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "863px",
            marginBottom: "2rem"
          }}
        />
        <Highlights />
        <Features />

        <Socials />

        <FAQ />
        <Footer />
      </div>
    </>
  );
}
