import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-sections";
import { Sponsors } from "./sections/sponsors";
import { Stats } from "./sections/stats";
import { Gallery } from "./sections/gallery";
import { WhyChooseUs } from "./sections/why-choose-us";
import { CallToAction } from "./sections/call-to-action";
import { SpeakersSection } from "./sections/speakers";
import { OrganizingCommittee } from "./sections/committee";
import { Contact } from "./sections/contact";
import { Footer } from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import { VenuePage } from "./VenuePage";

const path = window.location.pathname;

function App() {
  // Render the venue/travel page at /venue
  if (path === "/venue") {
    return <VenuePage />;
  }

  // Main conference page
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <Sponsors />
      <Stats />
      <SpeakersSection />
      <OrganizingCommittee />
      <Gallery />
      <WhyChooseUs />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}

export default App;