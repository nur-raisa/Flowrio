import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Flowrio! 🌸",
      description: "You'll receive our latest updates and exclusive offers.",
    });
    
    setEmail('');
    setLoading(false);
  };

  return (
    <section className="section-padding gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-2xl mb-4 block">💌</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join the Flowrio Family
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe for exclusive offers, flower care tips, and be the first to know about new arrivals.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full bg-background/80 backdrop-blur-sm border-border"
              required
            />
            <Button
              type="submit"
              className="rounded-full"
              disabled={loading}
            >
              {loading ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam, we promise. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
