import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ReflectionSection } from '@/components/sections/ReflectionSection';
import { ConclusionSection } from '@/components/sections/ConclusionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ReflectionSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
