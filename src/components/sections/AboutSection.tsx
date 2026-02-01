import { useState } from 'react';
import { Button } from '@/components/ui/button';
import aboutRose from '@/assets/about-rose.jpg';

export function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  const shortDescription = "Flowers as a gift together with sincere interest in ones ailing health is the best medicine. Round Bouquet of pink tulips and germisies together with scattinkis and astromettadd the room.";

  const fullDescription = `Flowers as a gift together with sincere interest in ones ailing health is the best medicine. Round Bouquet of pink tulips and germisies together with scattinkis and astromettadd the room.

We believe flowers are more than just gifts — they are feelings wrapped in petals. Whether it's a birthday, anniversary, celebration, or a simple gesture of love, our collections are designed to make every moment more meaningful.

Let your emotions bloom with us, and find the perfect bouquet for every story you want to tell.`;

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-tight tracking-wide">
              Find your Perfect
              <br />
              bouquet flower
            </h2>
            
            <div className="text-muted-foreground text-base leading-relaxed">
              {showMore ? (
                <p className="whitespace-pre-line">{fullDescription}</p>
              ) : (
                <p>{shortDescription}</p>
              )}
            </div>

            <Button 
              variant="default"
              className="rounded-full px-10 py-6 text-base font-medium"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Know More'}
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src={aboutRose} 
                alt="Beautiful pink rose" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
