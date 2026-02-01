import { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCartContext } from '@/contexts/CartContext';
import { toast } from 'sonner';

// Import bouquet images
import bouquet1 from '@/assets/bouquets/bouquet-1.jpg';
import bouquet2 from '@/assets/bouquets/bouquet-2.jpg';
import bouquet3 from '@/assets/bouquets/bouquet-3.jpg';
import bouquet4 from '@/assets/bouquets/bouquet-4.jpg';
import bouquet5 from '@/assets/bouquets/bouquet-5.jpg';
import bouquet6 from '@/assets/bouquets/bouquet-6.jpg';
import bouquet7 from '@/assets/bouquets/bouquet-7.jpg';
import bouquet8 from '@/assets/bouquets/bouquet-8.jpg';
import bouquet9 from '@/assets/bouquets/bouquet-9.jpg';
import bouquet10 from '@/assets/bouquets/bouquet-10.jpg';
import bouquet11 from '@/assets/bouquets/bouquet-11.jpg';
import bouquet12 from '@/assets/bouquets/bouquet-12.jpg';
import bouquet13 from '@/assets/bouquets/bouquet-13.jpg';
import bouquet14 from '@/assets/bouquets/bouquet-14.jpg';
import bouquet15 from '@/assets/bouquets/bouquet-15.jpg';
import bouquet16 from '@/assets/bouquets/bouquet-16.jpg';
import bouquet17 from '@/assets/bouquets/bouquet-17.jpg';

const mainCategories = [
  { id: 'all', name: 'Mixed' },
  { id: 'roses', name: 'Roses' },
  { id: 'lilies', name: 'Lilies' },
  { id: 'tulip', name: 'Tulip' },
  { id: 'lavender', name: 'Lavender' },
];

const moreCategories = [
  { id: 'carnation', name: 'Carnation' },
  { id: 'daisy', name: 'Daisy' },
];

const bouquets = [
  // First 4 featured bouquets
  { id: '2', name: 'Lily & Rose Mix', price: 85, image: bouquet5, category: 'lilies' },
  { id: '1', name: 'Pink Rose Elegance', price: 65, image: bouquet1, category: 'roses' },
  { id: '15', name: 'Layla Pink Bloom', price: 92, image: bouquet15, category: 'roses' },
  { id: '17', name: 'Pink Carnation Bliss', price: 79, image: bouquet17, category: 'carnation' },
  // Rest of the bouquets
  { id: '7', name: 'Pink Lily Garden', price: 78, image: bouquet7, category: 'lilies' },
  { id: '3', name: 'Tulip Dream', price: 48, image: bouquet3, category: 'tulip' },
  { id: '4', name: 'Rose Blush', price: 72, image: bouquet4, category: 'roses' },
  { id: '5', name: 'Daisy Sunshine', price: 55, image: bouquet2, category: 'daisy' },
  { id: '6', name: 'Lavender Bliss', price: 58, image: bouquet6, category: 'lavender' },
  { id: '8', name: 'Classic Pink Roses', price: 68, image: bouquet8, category: 'roses' },
  { id: '9', name: 'Red Rose Romance', price: 75, image: bouquet9, category: 'roses' },
  { id: '10', name: 'Vogue White Roses', price: 82, image: bouquet10, category: 'roses' },
  { id: '11', name: 'Sage Green Elegance', price: 70, image: bouquet11, category: 'roses' },
  { id: '12', name: 'Garden Mix Deluxe', price: 95, image: bouquet12, category: 'daisy' },
  { id: '13', name: 'Blue Serenity', price: 78, image: bouquet13, category: 'roses' },
  { id: '14', name: 'Pastel Dream', price: 88, image: bouquet14, category: 'roses' },
  { id: '16', name: 'Sunshine White Roses', price: 65, image: bouquet16, category: 'roses' },
];

export function ShopSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const filteredBouquets = selectedCategory === 'all' 
    ? bouquets 
    : bouquets.filter(b => b.category === selectedCategory);

  const displayedBouquets = showAll ? filteredBouquets : filteredBouquets.slice(0, 4);

  return (
    <section id="shop" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Shop Bouquets</h2>
          <p className="text-muted-foreground mt-2">
            Discover our beautiful handcrafted bouquets
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setShowAll(false);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border hover:border-primary"
              )}
            >
              {cat.name}
            </button>
          ))}
          {showMoreCategories && moreCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setShowAll(false);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border hover:border-primary"
              )}
            >
              {cat.name}
            </button>
          ))}
          <button
            onClick={() => setShowMoreCategories(!showMoreCategories)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors",
              "bg-background border border-border hover:border-primary"
            )}
          >
            {showMoreCategories ? 'Show Less' : 'Show More'}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedBouquets.map((bouquet) => (
            <BouquetCard key={bouquet.id} bouquet={bouquet} />
          ))}
        </div>

        {!showAll && filteredBouquets.length > 4 && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="rounded-full"
            >
              View All Bouquets
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(false)}
              className="rounded-full"
            >
              View Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

interface BouquetCardProps {
  bouquet: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

function BouquetCard({ bouquet }: BouquetCardProps) {
  const { addToCart } = useCartContext();

  const handleAddToCart = async () => {
    try {
      await addToCart(bouquet.id);
      toast.success(`${bouquet.name} added to cart!`);
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  return (
    <div className="card-flower block group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <img
          src={bouquet.image}
          alt={bouquet.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-9 h-9 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={handleAddToCart}
            className="w-full rounded-full"
            size="sm"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
          {bouquet.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${bouquet.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
