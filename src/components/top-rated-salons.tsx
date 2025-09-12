import { mockSalons } from '@/lib/mock-data';
import SalonCard from './salon-card';
import { Button } from './ui/button';

const TopRatedSalons = () => {
  return (
    <section id="salons" className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <h2 className="text-center font-headline text-4xl font-bold">
          Top Rated Salons
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Discover the most loved and highest-rated beauty spots in your city.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mockSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>View More Salons</Button>
        </div>
      </div>
    </section>
  );
};

export default TopRatedSalons;
