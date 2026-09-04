import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Programs } from "@/components/sections/Programs";
import { Impact } from "@/components/sections/Impact";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Programs />
      <Impact />
      <Events />
      <Testimonials />
      <Gallery />
      <HowItWorks />
      <Contact />
    </>
  );
}
