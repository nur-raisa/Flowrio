import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const occasions = [
  {
    name: 'Birthday',
    emoji: '🎂',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Anniversary',
    emoji: '💕',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400',
    color: 'from-red-400 to-pink-500',
  },
  {
    name: 'Wedding',
    emoji: '💒',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f6f9c?w=400',
    color: 'from-rose-300 to-pink-400',
  },
  {
    name: "Valentine's Day",
    emoji: '❤️',
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400',
    color: 'from-red-500 to-rose-600',
  },
];

export function OccasionsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Perfect for Every Moment</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Shop by Occasion
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find the perfect flowers for life's special moments
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.name}
              to={`/shop?occasion=${occasion.name.toLowerCase()}`}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={occasion.image}
                alt={occasion.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${occasion.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-4xl mb-2">{occasion.emoji}</span>
                <h3 className="font-display font-semibold text-lg md:text-xl">
                  {occasion.name}
                </h3>
                <span className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
