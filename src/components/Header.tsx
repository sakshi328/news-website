import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Politics", href: "#politics" },
  { name: "Technology", href: "#tech" },
  { name: "Business", href: "#business" },
  { name: "Culture", href: "#culture" },
  { name: "Sports", href: "#sports" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl font-bold text-headline tracking-tight">
                The Daily Pulse
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-muted-foreground" />
            </button>
            <Button variant="default" size="sm" className="hidden sm:flex">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 pb-4 border-t border-border pt-3">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="nav-link text-sm">
              {category.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
