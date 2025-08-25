import { Card } from "@/components/ui/card";
import { Scissors, Palette, Sparkles, Flower, Brush, Users } from "lucide-react";

const categories = [
  {
    id: "braiding",
    name: "Braiding",
    icon: Scissors,
    description: "Protective styles & creative braids",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "nails",
    name: "Nails",
    icon: Sparkles,
    description: "Manicures & nail art",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "dreadlocks",
    name: "Dreadlocks",
    icon: Users,
    description: "Locs maintenance & styling",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "spa_facials",
    name: "Spa & Facials",
    icon: Flower,
    description: "Relaxing treatments & skincare",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "makeup",
    name: "Makeup",
    icon: Palette,
    description: "Beauty & special occasion makeup",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "barbering",
    name: "Barbering",
    icon: Brush,
    description: "Cuts, shaves & grooming",
    color: "from-blue-500 to-indigo-500"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect beauty professional for your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group relative overflow-hidden border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-pointer"
              >
                <div className="p-6 text-center">
                  {/* Icon with gradient background */}
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Category name */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;