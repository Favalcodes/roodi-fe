import { EarlyAdoptor, FooterSection, Hero, HowSection, WhySection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="herobg"></div>
      <Hero />
      <HowSection />
      <EarlyAdoptor />
      <WhySection />
      <FooterSection />
    </div>
  );
}
