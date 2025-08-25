import { Button } from "@/components/ui/button";
import { Heart, Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[hsl(var(--beauty-purple))] to-[hsl(var(--beauty-pink))]">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[hsl(var(--beauty-purple))] to-[hsl(var(--beauty-pink))] bg-clip-text text-transparent">
              BeautyHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/explore" className="text-muted-foreground hover:text-primary transition-colors">
              Explore Salons
            </a>
            <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Beauty Tips
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-[hsl(var(--beauty-purple))] to-[hsl(var(--beauty-pink))] hover:opacity-90 transition-opacity"
            >
              Add Your Salon
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                Explore Salons
              </a>
              <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Beauty Tips
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-[hsl(var(--beauty-purple))] to-[hsl(var(--beauty-pink))] hover:opacity-90 transition-opacity"
                >
                  Add Your Salon
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;