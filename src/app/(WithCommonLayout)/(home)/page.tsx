import Category from "@/components/modules/home/Category";
import HeroSection from "@/components/modules/home/HeroSection";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";


const HomePage = () => {
  
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
