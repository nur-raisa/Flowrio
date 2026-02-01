import { Truck, Leaf, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'Direct from local farms to your door, ensuring the freshest blooms every time.',
  },
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    description: 'Order by 2 PM and receive your flowers the same day within our delivery area.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Beautiful arrangements at fair prices. Luxury doesn\'t have to break the bank.',
  },
  {
    icon: Heart,
    title: '100% Happiness',
    description: 'Not satisfied? We\'ll replace your arrangement or give you a full refund.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium">The Flowrio Difference</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Why Choose Flowrio?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
