-- Create products table
CREATE TABLE public.products (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category TEXT NOT NULL,
    occasion TEXT[],
    image_url TEXT NOT NULL,
    images TEXT[] DEFAULT '{}',
    in_stock BOOLEAN DEFAULT true,
    is_bestseller BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on products (public read access)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Anyone can view products
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Create cart_items table (session-based for anonymous users)
CREATE TABLE public.cart_items (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    message_card TEXT,
    include_vase BOOLEAN DEFAULT false,
    delivery_date DATE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on cart_items
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Cart items are accessible by session
CREATE POLICY "Cart items are accessible by session" 
ON public.cart_items 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create orders table
CREATE TABLE public.orders (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    delivery_address TEXT NOT NULL,
    delivery_date DATE NOT NULL,
    items JSONB NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    delivery_fee DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Orders are accessible by session
CREATE POLICY "Orders are accessible by session" 
ON public.orders 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Insert sample products
INSERT INTO public.products (name, description, price, category, occasion, image_url, images, is_bestseller, is_featured) VALUES
-- Roses
('Classic Red Roses', 'A timeless bouquet of 12 stunning red roses, perfect for expressing deep love and passion.', 49.99, 'roses', ARRAY['anniversary', 'valentine'], 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800'], true, true),
('Pink Rose Elegance', 'Delicate pink roses arranged with eucalyptus for a soft, romantic touch.', 54.99, 'roses', ARRAY['birthday', 'anniversary'], 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800', ARRAY['https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800'], false, true),
('White Rose Serenity', 'Pure white roses symbolizing innocence and new beginnings.', 52.99, 'roses', ARRAY['wedding', 'sympathy'], 'https://images.unsplash.com/photo-1559563362-c667ba5f6f9c?w=800', ARRAY['https://images.unsplash.com/photo-1559563362-c667ba5f6f9c?w=800'], false, false),
('Rainbow Rose Delight', 'A stunning mix of colorful roses to brighten any occasion.', 64.99, 'roses', ARRAY['birthday', 'congratulations'], 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800', ARRAY['https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800'], true, false),

-- Bouquets
('Spring Garden Mix', 'A vibrant arrangement of seasonal flowers including tulips, daisies, and chrysanthemums.', 69.99, 'bouquets', ARRAY['birthday', 'congratulations'], 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800', ARRAY['https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800'], true, true),
('Sunset Meadow', 'Warm-toned flowers in oranges, yellows, and reds for a cozy feel.', 74.99, 'bouquets', ARRAY['birthday', 'anniversary'], 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800', ARRAY['https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800'], false, true),
('Lavender Dreams', 'Soothing purple and lavender blooms with a calming fragrance.', 59.99, 'bouquets', ARRAY['mother', 'birthday'], 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800', ARRAY['https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800'], false, false),
('Tropical Paradise', 'Exotic flowers including birds of paradise and orchids.', 89.99, 'bouquets', ARRAY['congratulations', 'birthday'], 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', ARRAY['https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800'], true, false),

-- Indoor Plants
('Peace Lily', 'An elegant indoor plant known for its air-purifying qualities.', 44.99, 'plants', ARRAY['birthday', 'congratulations'], 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800', ARRAY['https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800'], true, false),
('Orchid Elegance', 'A stunning phalaenopsis orchid in a decorative pot.', 79.99, 'plants', ARRAY['birthday', 'anniversary'], 'https://images.unsplash.com/photo-1566907225472-514215c9b527?w=800', ARRAY['https://images.unsplash.com/photo-1566907225472-514215c9b527?w=800'], false, true),
('Succulent Garden', 'A charming arrangement of assorted succulents.', 39.99, 'plants', ARRAY['birthday', 'congratulations'], 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800', ARRAY['https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800'], false, false),
('Monstera Deliciosa', 'The trendy Swiss cheese plant for modern spaces.', 64.99, 'plants', ARRAY['birthday'], 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800', ARRAY['https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800'], true, false),

-- Gift Combos
('Romance Package', 'Red roses, chocolates, and a teddy bear for the perfect romantic gift.', 99.99, 'gift-combos', ARRAY['valentine', 'anniversary'], 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800', ARRAY['https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800'], true, true),
('Birthday Celebration', 'Colorful bouquet with balloons and a birthday card.', 84.99, 'gift-combos', ARRAY['birthday'], 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', ARRAY['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800'], true, false),
('Get Well Soon', 'Cheerful flowers with a comfort care package.', 74.99, 'gift-combos', ARRAY['sympathy'], 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800', ARRAY['https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800'], false, false),

-- Seasonal
('Summer Sunshine', 'Bright sunflowers and daisies celebrating the warmth of summer.', 54.99, 'seasonal', ARRAY['birthday', 'congratulations'], 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800', ARRAY['https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800'], false, true),
('Autumn Harvest', 'Rich fall colors with chrysanthemums and seasonal accents.', 59.99, 'seasonal', ARRAY['birthday'], 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', ARRAY['https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800'], false, false),
('Winter Wonderland', 'White and silver arrangement perfect for the holiday season.', 69.99, 'seasonal', ARRAY['birthday', 'congratulations'], 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800', ARRAY['https://images.unsplash.com/photo-1544816155-12df9643f363?w=800'], true, false);