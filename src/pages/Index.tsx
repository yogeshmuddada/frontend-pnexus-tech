
import HeroSection from "@/components/HeroSection";
import AboutMentor from "@/components/AboutMentor";
import Curriculum from "@/components/Curriculum";
import WhyJoin from "@/components/WhyJoin";
import Testimonials from "@/components/Testimonials";
import ProjectPreview from "@/components/ProjectPreview";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="mentor">
        <AboutMentor />
      </div>
      <div id="curriculum">
        <Curriculum />
      </div>
      <WhyJoin />
      <div id="testimonials">
        <Testimonials />
      </div>
      <ProjectPreview />
      <Pricing />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
      <StickyButton />
    </div>
  );
};

export default Index;
