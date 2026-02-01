import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCartContext } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

// Bouquet data for search
const bouquets = [
  { id: '1', name: 'Pink Rose Elegance', category: 'roses' },
  { id: '2', name: 'Lily & Rose Mix', category: 'lilies' },
  { id: '3', name: 'Tulip Dream', category: 'tulip' },
  { id: '4', name: 'Rose Blush', category: 'roses' },
  { id: '5', name: 'Daisy Sunshine', category: 'daisy' },
  { id: '6', name: 'Lavender Bliss', category: 'lavender' },
  { id: '7', name: 'Pink Lily Garden', category: 'lilies' },
  { id: '8', name: 'Classic Pink Roses', category: 'roses' },
  { id: '9', name: 'Red Rose Romance', category: 'roses' },
  { id: '10', name: 'Vogue White Roses', category: 'roses' },
  { id: '11', name: 'Sage Green Elegance', category: 'roses' },
  { id: '12', name: 'Garden Mix Deluxe', category: 'daisy' },
  { id: '13', name: 'Blue Serenity', category: 'roses' },
  { id: '14', name: 'Pastel Dream', category: 'roses' },
  { id: '15', name: 'Layla Pink Bloom', category: 'roses' },
  { id: '16', name: 'Sunshine White Roses', category: 'roses' },
  { id: '17', name: 'Pink Carnation Bliss', category: 'carnation' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const { setIsOpen, itemCount } = useCartContext();

  useEffect(() => {
    const sections = ['home', 'about', 'shop', 'gallery'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const filteredBouquets = searchQuery.length > 0
    ? bouquets.filter(b => 
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchResultClick = (bouquetName: string) => {
    // Scroll to shop section
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center gap-2"
          >
            <span className="text-2xl md:text-3xl font-display font-bold text-primary">
              Flowrio
            </span>
            <span className="text-rose text-2xl">🌸</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "transition-colors font-medium",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div ref={searchRef} className="relative hidden md:block">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search flowers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 rounded-full pl-10 pr-4"
                    autoFocus
                  />
                  <Search className="w-4 h-4 text-muted-foreground absolute left-3" />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-2 p-1 hover:bg-muted rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <Search className="w-5 h-5 text-foreground/70" />
                </button>
              )}

              {/* Search Results Dropdown */}
              {isSearchOpen && searchQuery.length > 0 && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50">
                  {filteredBouquets.length > 0 ? (
                    <div className="max-h-64 overflow-y-auto">
                      {filteredBouquets.map((bouquet) => (
                        <button
                          key={bouquet.id}
                          onClick={() => handleSearchResultClick(bouquet.name)}
                          className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center justify-between"
                        >
                          <span>{bouquet.name}</span>
                          <span className="text-xs text-muted-foreground capitalize">{bouquet.category}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-3 text-muted-foreground text-center">
                      No flowers found
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-foreground/70" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          {/* Mobile Search */}
          <div className="px-2 py-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full pl-10 pr-4"
              />
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            {searchQuery.length > 0 && (
              <div className="mt-2 bg-muted/50 rounded-xl overflow-hidden">
                {filteredBouquets.length > 0 ? (
                  <div className="max-h-40 overflow-y-auto">
                    {filteredBouquets.slice(0, 5).map((bouquet) => (
                      <button
                        key={bouquet.id}
                        onClick={() => handleSearchResultClick(bouquet.name)}
                        className="w-full px-4 py-2 text-left hover:bg-muted transition-colors text-sm"
                      >
                        {bouquet.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-2 text-muted-foreground text-sm text-center">
                    No flowers found
                  </div>
                )}
              </div>
            )}
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "px-4 py-2 text-left rounded-lg transition-colors",
                  activeSection === link.href.slice(1)
                    ? "text-primary bg-muted"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                )}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
