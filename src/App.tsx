import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-sections";
import { Stats } from "./sections/stats";
import { Gallery } from "./sections/gallery";
import { WhyChooseUs } from "./sections/why-choose-us";
import { CallToAction } from "./sections/call-to-action";
import { SpeakersSection } from "./sections/speakers";
import { OrganizingCommittee } from "./sections/committee";
import { TravelCasablanca } from "./sections/travel-casablanca";
import { Contact } from "./sections/contact";
import { Footer } from "./components/footer";
import LenisScroll from "./components/lenis-scroll";

function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <Stats />
      <SpeakersSection />
      <OrganizingCommittee />
      <Gallery />
      <TravelCasablanca />
      <WhyChooseUs />  
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}

export default App;