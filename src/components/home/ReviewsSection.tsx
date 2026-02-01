import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    rating: 5,
    text: 'Absolutely stunning arrangement! The flowers were fresh and lasted for weeks. My mom was so happy with her birthday bouquet.',
    occasion: 'Birthday',
  },
  {
    id: 2,
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    rating: 5,
    text: 'Same-day delivery saved me! The roses were perfect for our anniversary. Will definitely order again.',
    occasion: 'Anniversary',
  },
  {
    id: 3,
    name: 'Emily Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    rating: 5,
    text: 'The wedding flowers exceeded our expectations. Flowrio made our special day even more beautiful!',
    occasion: 'Wedding',
  },
];

export function ReviewsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Customer Love</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-rose-light mb-3" />
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {review.text}
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.occasion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
