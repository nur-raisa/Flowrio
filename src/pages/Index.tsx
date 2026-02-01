import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { HomeSection } from '@/components/sections/HomeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ShopSection } from '@/components/sections/ShopSection';
import { GallerySection } from '@/components/sections/GallerySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartSidebar />
      <main>
        <HomeSection />
        <AboutSection />
        <ShopSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
