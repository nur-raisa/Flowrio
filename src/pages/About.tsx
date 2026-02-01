import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Button } from '@/components/ui/button';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const shortDescription = "Flowers have a special way of expressing what words cannot. At our bouquet shop, every arrangement is thoughtfully designed to capture emotions, celebrate moments, and create lasting memories.";

  const fullDescription = `Flowers have a special way of expressing what words cannot. At our bouquet shop, every arrangement is thoughtfully designed to capture emotions, celebrate moments, and create lasting memories. From romantic roses to cheerful mixed blooms, each bouquet is crafted with freshness, care, and artistic touch.

We believe flowers are more than just gifts — they are feelings wrapped in petals. Whether it's a birthday, anniversary, celebration, or a simple gesture of love, our collections are designed to make every moment more meaningful. With handpicked flowers, elegant wrapping, and attention to detail, we bring beauty straight from nature to your hands.

Let your emotions bloom with us, and find the perfect bouquet for every story you want to tell.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartSidebar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
              Handpicked Bouquets for Your Perfect Moments
            </h1>
            
            <div className="text-muted-foreground text-lg leading-relaxed">
              {showMore ? (
                <p className="whitespace-pre-line">{fullDescription}</p>
              ) : (
                <p>{shortDescription}</p>
              )}
            </div>

            <Button 
              variant="outline" 
              className="rounded-full px-8"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Know More'}
            </Button>
          </div>

          {/* Right Side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400"
                  alt="Beautiful rose bouquet"
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400"
                  alt="Pink flower arrangement"
                  className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400"
                  alt="Elegant bouquet"
                  className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400"
                  alt="Mixed flower bouquet"
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
