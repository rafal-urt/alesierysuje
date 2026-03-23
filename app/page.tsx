import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutService from "./components/AboutService";
import HowItWorks from "./components/HowItWorks";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutService />
        <HowItWorks />
        <Packages />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
