import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import ServiceCategories from "@/components/ui/service-categories";
import FeaturedSalons from "@/components/ui/featured-salons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceCategories />
      <FeaturedSalons />
    </div>
  );
};

export default Index;
