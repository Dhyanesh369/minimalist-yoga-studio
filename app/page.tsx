import HeroSplit from "@/components/sections/HeroSplit";
import Benefits from "@/components/sections/Benefits";
import ClassGrid from "@/components/sections/ClassGrid";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSplit />
      <Benefits />
      <ClassGrid />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}


