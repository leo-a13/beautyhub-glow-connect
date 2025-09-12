import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Palette, Sparkles, Heart, Brush, UserCheck } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    name: 'Braiding',
    count: '150+ Salons',
    icon: Scissors,
    bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600',
    iconColor: 'text-white',
    hoverColor: 'hover:from-purple-500 hover:to-purple-700',
  },
  {
    name: 'Nails',
    count: '200+ Salons',
    icon: Sparkles,
    bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
    iconColor: 'text-white',
    hoverColor: 'hover:from-pink-500 hover:to-pink-700',
  },
  {
    name: 'Dreadlocks',
    count: '80+ Salons',
    icon: Scissors,
    bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
    iconColor: 'text-white',
    hoverColor: 'hover:from-orange-500 hover:to-orange-700',
  },
  {
    name: 'Spa & Facials',
    count: '120+ Salons',
    icon: Heart,
    bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    iconColor: 'text-white',
    hoverColor: 'hover:from-emerald-500 hover:to-emerald-700',
  },
  {
    name: 'Makeup',
    count: '95+ Artists',
    icon: Brush,
    bgColor: 'bg-gradient-to-br from-rose-400 to-rose-600',
    iconColor: 'text-white',
    hoverColor: 'hover:from-rose-500 hover:to-rose-700',
  },
  {
    name: 'Barbering',
    count: '75+ Barbers',
    icon: UserCheck,
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
    iconColor: 'text-white',
    hoverColor: 'hover:from-blue-500 hover:to-blue-700',
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl text-warmgray-900 font-semibold">
              Explore Beauty Services
            </h2>
            <Sparkles className="h-8 w-8 text-pink-600" />
          </div>
          <p className="text-xl text-warmgray-600">
            Find the perfect service for your style
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link href="/dashboard/customer/explore" key={index}>
                <Card 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-white overflow-hidden h-full"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Colorful Icon Box */}
                    <div className={`${category.bgColor} ${category.hoverColor} transition-all duration-300 p-8 flex items-center justify-center group-hover:scale-105`}>
                      <IconComponent className={`h-12 w-12 ${category.iconColor} drop-shadow-lg`} />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 text-center flex-grow flex flex-col justify-center">
                      <h3 className="text-warmgray-900 mb-1 font-semibold group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-warmgray-500 font-medium">
                        {category.count}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block gradient-beauty-primary rounded-full p-0.5">
             <Link href="/dashboard/customer/explore">
                <button 
                  className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors duration-300 font-medium"
                >
                  View All Services
                </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
