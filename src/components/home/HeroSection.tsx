import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
          <span className="text-primary">Blooming Moments,</span>
          <br />
          <span className="text-primary">Beautiful Memories</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-display text-rose italic">
          Bloomingly Yours
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button size="lg" className="rounded-full px-10 py-6 text-lg" asChild>
            <Link to="/shop">
              Explore Flowers
            </Link>
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-16 md:mt-24 w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">3000+</p>
            <p className="text-sm md:text-base text-muted-foreground">Packing sold</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">5000+</p>
            <p className="text-sm md:text-base text-muted-foreground">Bouquet sold</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">700+</p>
            <p className="text-sm md:text-base text-muted-foreground">Happy clients</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">15+</p>
            <p className="text-sm md:text-base text-muted-foreground">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
