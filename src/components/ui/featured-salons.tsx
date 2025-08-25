import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, MessageCircle } from "lucide-react";

// Mock data for featured salons
const featuredSalons = [
  {
    id: "1",
    name: "Glamour Touch Beauty",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    location: "Lagos, Nigeria",
    rating: 4.8,
    reviewCount: 124,
    startingPrice: "₦5,000",
    categories: ["Braiding", "Makeup"],
    isVerified: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Natural Hair Paradise",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    location: "Abuja, Nigeria",
    rating: 4.9,
    reviewCount: 89,
    startingPrice: "₦3,500",
    categories: ["Dreadlocks", "Natural Hair"],
    isVerified: true,
    isFeatured: false
  },
  {
    id: "3",
    name: "Sparkle Nails Studio",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    reviewCount: 156,
    startingPrice: "₦2,000",
    categories: ["Nails", "Pedicure"],
    isVerified: false,
    isFeatured: true
  },
  {
    id: "4",
    name: "Royal Beauty Lounge",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    location: "Accra, Ghana",
    rating: 4.6,
    reviewCount: 92,
    startingPrice: "GH₵80",
    categories: ["Spa", "Facials"],
    isVerified: true,
    isFeatured: false
  },
  {
    id: "5",
    name: "Elite Cuts & Style",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
    location: "Nairobi, Kenya",
    rating: 4.8,
    reviewCount: 203,
    startingPrice: "KSh 1,500",
    categories: ["Barbering", "Styling"],
    isVerified: true,
    isFeatured: true
  },
  {
    id: "6",
    name: "Glow Beauty Haven",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
    location: "Cape Town, South Africa",
    rating: 4.9,
    reviewCount: 178,
    startingPrice: "R250",
    categories: ["Makeup", "Skincare"],
    isVerified: true,
    isFeatured: false
  }
];

const FeaturedSalons = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Salons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated beauty professionals in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSalons.map((salon) => (
            <Card
              key={salon.id}
              className="group overflow-hidden border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              {/* Salon Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {salon.isFeatured && (
                    <Badge className="bg-gradient-to-r from-[hsl(var(--beauty-gold))] to-yellow-400 text-foreground border-0">
                      Featured
                    </Badge>
                  )}
                  {salon.isVerified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-xs font-medium">{salon.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Salon Name */}
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {salon.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{salon.location}</span>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {salon.categories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="text-xs border-border/50"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(salon.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({salon.reviewCount} reviews)
                  </span>
                </div>

                {/* Starting Price */}
                <div className="mb-4">
                  <span className="text-lg font-semibold text-foreground">
                    From {salon.startingPrice}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border/50 hover:bg-muted"
                  >
                    View Profile
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-[hsl(var(--beauty-purple))] to-[hsl(var(--beauty-pink))] hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Salons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSalons;