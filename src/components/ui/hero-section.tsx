import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--beauty-purple))] via-[hsl(var(--beauty-pink))] to-[hsl(var(--beauty-warm))]" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/30 blur-lg" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 rounded-full bg-white/25 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find the Perfect
            <span className="block bg-gradient-to-r from-[hsl(var(--beauty-gold))] to-white bg-clip-text text-transparent">
              Salon for Your Style
            </span>
            <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2">
              in Your City
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover amazing beauty professionals and book your next appointment with trusted salons near you
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[var(--shadow-beauty)] max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* City Search */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter your city..."
                  className="pl-10 h-12 border-border/50 focus:border-primary"
                />
              </div>

              {/* Service Category */}
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="h-12 border-border/50 focus:border-primary">
                    <SelectValue placeholder="Choose a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="braiding">Braiding</SelectItem>
                    <SelectItem value="nails">Nails</SelectItem>
                    <SelectItem value="dreadlocks">Dreadlocks</SelectItem>
                    <SelectItem value="spa_facials">Spa & Facials</SelectItem>
                    <SelectItem value="makeup">Makeup</SelectItem>
                    <SelectItem value="barbering">Barbering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button 
                size="lg" 
                className="h-12 px-8 bg-gradient-to-r from-[hsl(var(--beauty-purple))] to-[hsl(var(--beauty-pink))] hover:opacity-90 transition-opacity"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Location */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <MapPin className="h-4 w-4 mr-1" />
                Use my location
              </Button>
            </div>
          </div>

          {/* Popular Cities */}
          <div className="mt-8 text-white/70">
            <p className="text-sm mb-3">Popular cities:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Lagos", "Abuja", "Accra", "Nairobi", "Cape Town", "Douala"].map((city) => (
                <button
                  key={city}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;