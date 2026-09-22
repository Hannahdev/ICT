import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import { TravelCasablanca } from "./sections/travel-casablanca";

export function VenuePage() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <div className="pt-28">
                <TravelCasablanca />
            </div>
            <Footer />
        </>
    );
}
