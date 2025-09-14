import { Footer7 } from "@/components/ui/footer-7";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
export default function Home() {
  return (
    <div className="w-full bg-[#E3E2E0] ">
      <NavBar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer7 />
    </div>
  );
}
