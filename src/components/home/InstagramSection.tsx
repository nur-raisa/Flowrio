const images = [
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400',
  'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400',
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400',
  'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400',
  'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400',
  'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400',
];

export function InstagramSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium">@flowrio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground mt-4">
            Tag us in your flower photos for a chance to be featured!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  📷
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
