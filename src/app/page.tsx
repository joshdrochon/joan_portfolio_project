import HeroSection from "@/components/sections/HeroSection";
import CardsSection from "@/components/sections/CardsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <HeroSection />
      <CardsSection />
      <ProjectsSection />
    </main>
  );
}
