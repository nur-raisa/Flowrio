import { Button } from '@/components/ui/button';
import { PetalShower } from '@/components/home/PetalShower';

// Decorative floating flower component
function FloatingFlower({ className, size = 40, color = "#F8B4C0" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <ellipse cx="50" cy="20" rx="12" ry="18" fill={color} opacity="0.8" />
      <ellipse cx="80" cy="50" rx="12" ry="18" fill={color} opacity="0.75" transform="rotate(72 80 50)" />
      <ellipse cx="68" cy="85" rx="12" ry="18" fill={color} opacity="0.8" transform="rotate(144 68 85)" />
      <ellipse cx="32" cy="85" rx="12" ry="18" fill={color} opacity="0.75" transform="rotate(216 32 85)" />
      <ellipse cx="20" cy="50" rx="12" ry="18" fill={color} opacity="0.8" transform="rotate(288 20 50)" />
      <circle cx="50" cy="50" r="10" fill="#FF69B4" />
      <circle cx="50" cy="50" r="5" fill="#FFD700" />
    </svg>
  );
}

// Decorative leaf component
function FloatingLeaf({ className, size = 30 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 40 60" className={className}>
      <path 
        d="M20 5 Q35 20 35 40 Q35 55 20 55 Q5 55 5 40 Q5 20 20 5" 
        fill="#90C695" 
        opacity="0.6"
      />
      <path d="M20 15 L20 50" stroke="#6B8E6B" strokeWidth="1.5" fill="none" opacity="0.8" />
    </svg>
  );
}

export function HomeSection() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-background relative overflow-hidden">
      {/* Petal Shower Animation */}
      <PetalShower />
      
      {/* Decorative Floating Elements */}
      <FloatingFlower className="absolute top-20 left-8 animate-float opacity-70" size={55} color="#FFB6C1" />
      <FloatingFlower className="absolute top-32 right-16 animate-float opacity-60" size={40} color="#F8B4C0" />
      <FloatingFlower className="absolute bottom-40 left-16 animate-float opacity-50" size={45} color="#FFC0CB" />
      <FloatingFlower className="absolute top-1/3 right-8 animate-float opacity-40" size={35} color="#FFB6C1" />
      <FloatingLeaf className="absolute top-24 left-1/4 animate-float opacity-50" size={25} />
      <FloatingLeaf className="absolute bottom-32 right-1/4 animate-float opacity-40" size={30} />
      <FloatingLeaf className="absolute top-1/2 left-12 animate-float opacity-45" size={22} />
      
      {/* Decorative circles */}
      <div className="absolute top-16 right-1/3 w-64 h-64 rounded-full bg-rose-light/20 blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
      
      <div className="w-full max-w-7xl mx-auto z-10 mt-16 md:mt-20">
        <div className="text-center space-y-8">
          {/* Main Title with elegant font */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-wide">
            <span className="text-primary drop-shadow-sm">Blooming Moments,</span>
            <br />
            <span className="text-primary drop-shadow-sm">Beautiful Flowers.</span>
          </h1>

          {/* Subtitle with script font */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-script text-rose">
            Bloomingly Yours
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              size="lg" 
              className="rounded-full px-12 py-7 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={scrollToShop}
            >
              Explore Flowers
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-20 md:mt-28 w-full max-w-4xl mx-auto z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">1500+</p>
            <p className="text-sm md:text-base text-muted-foreground">Packing sold</p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">3000+</p>
            <p className="text-sm md:text-base text-muted-foreground">Bouquet sold</p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">500+</p>
            <p className="text-sm md:text-base text-muted-foreground">Happy clients</p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">10+</p>
            <p className="text-sm md:text-base text-muted-foreground">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
