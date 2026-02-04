import HeroSection from "@/components/home/HeroSection";
import InfoSection from "@/components/home/InfoSection";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="sm:w-[1200px] w-[320px] mx-auto">
        <HeroSection />
        <InfoSection />
      </div>
    </div>
  );
}
