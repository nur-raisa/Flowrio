import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Flower2, Heart, Sun, Church, Gift, Star } from 'lucide-react';

import valentinesBouquet from '@/assets/gallery/valentines-bouquet.jpg';
import womensDayBouquet from '@/assets/gallery/womens-day-bouquet.jpg';
import premiumPurpleBouquet from '@/assets/gallery/premium-purple-bouquet.jpg';
import mothersDayBouquet from '@/assets/gallery/mothers-day-bouquet.jpg';

const categories = [
  { id: 'bouquet', name: 'Bouquet', icon: Flower2 },
  { id: 'romance', name: 'Romance', icon: Heart },
  { id: 'summer', name: 'Early Summer', icon: Sun },
  { id: 'wedding', name: 'Wedding', icon: Church },
  { id: 'mothers-day', name: "Mother's Day", icon: Gift },
];

const galleryImages = [
  {
    src: womensDayBouquet,
    alt: "Women's Day elegant bouquet arrangement",
    category: 'romance',
  },
  {
    src: valentinesBouquet,
    alt: "Valentine's Day pink rose bouquet",
    category: 'bouquet',
  },
  {
    src: premiumPurpleBouquet,
    alt: "Premium purple lisianthus bouquet",
    category: 'summer',
  },
  {
    src: mothersDayBouquet,
    alt: "Mother's Day daisy bouquet",
    category: 'mothers-day',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Rodriguez',
    role: 'Bride',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    review: "Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Business Owner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    review: "The flowers were absolutely stunning! Perfect for our office reception. Will definitely order again for future events.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Williams',
    role: 'Housewife',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100',
    review: "Beautiful arrangement for my mother's birthday. She loved it! The delivery was on time and the flowers were fresh.",
    rating: 5,
  },
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('romance');

  const filteredImages = galleryImages.filter(
    (img) => img.category === selectedCategory || selectedCategory === 'all'
  );

  // Get images to display (use all 4 if enough match, otherwise show all)
  const displayImages = filteredImages.length >= 3 
    ? filteredImages.slice(0, 3) 
    : galleryImages.slice(0, 4);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Popular Categories
          </h2>
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            All Categories
          </Button>
        </div>

        {/* Main Content - Categories + Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Category Pills - Left Side */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 flex-wrap lg:flex-nowrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full transition-all text-left ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card border border-border hover:border-primary'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-primary-foreground/20' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                  </span>
                  <span className="font-medium whitespace-nowrap">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Images Grid - Right Side */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Featured Image */}
            <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden">
              <img
                src={displayImages[0]?.src}
                alt={displayImages[0]?.alt}
                className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <Button 
                className="absolute bottom-4 right-4 rounded-full bg-primary hover:bg-primary/90"
                size="sm"
              >
                View All
              </Button>
            </div>

            {/* Smaller Images */}
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={displayImages[1]?.src}
                alt={displayImages[1]?.alt}
                className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <Button 
                className="absolute bottom-4 right-4 rounded-full bg-primary hover:bg-primary/90"
                size="sm"
              >
                View All
              </Button>
            </div>

            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={displayImages[2]?.src}
                alt={displayImages[2]?.alt}
                className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <Button 
                className="absolute bottom-4 right-4 rounded-full bg-primary hover:bg-primary/90"
                size="sm"
              >
                View All
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Testimonial
            </h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                <span className="sr-only">Previous</span>
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                <span className="sr-only">Next</span>
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
