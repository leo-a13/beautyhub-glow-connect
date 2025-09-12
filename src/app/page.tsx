
import Header from '@/app/header';
import Footer from '@/components/footer';
import FeaturedCategories from '@/components/featured-categories';
import TopRatedSalons from '@/components/top-rated-salons';
import HowItWorks from '@/components/how-it-works';
import PromoteSalon from '@/components/promote-salon';
import AiStylist from '@/components/ai-stylist';
import BlogTeasers from '@/components/blog-teasers';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TopRatedSalons />
        <HowItWorks />
        <PromoteSalon />
        <AiStylist />
        <BlogTeasers />
      </main>
      <Footer />
    </div>
  );
}
