
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const PromoteSalon = () => {
  return (
    <section id="add-salon" className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <div className="relative rounded-lg overflow-hidden bg-primary/10">
            <div className="absolute inset-0">
                <Image 
                    src="https://placehold.co/1200x600.png"
                    alt="Salon owner smiling"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                    data-ai-hint="smiling salon owner"
                />
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
                <div>
                    <h2 className="font-headline text-4xl font-bold text-foreground">
                    Are you a Salon Owner?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                    Join our community of top-tier beauty professionals. Showcase your work, connect with new clients, and grow your business like never before.
                    </p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M20 6 9 17l-5-5"/></svg>
                            <span>Reach thousands of potential customers daily.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M20 6 9 17l-5-5"/></svg>
                            <span>Manage bookings and inquiries with our built-in tools.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M20 6 9 17l-5-5"/></svg>
                            <span>Get featured and increase your visibility.</span>
                        </li>
                    </ul>
                    <Button size="lg" className="mt-8" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} asChild>
                        <Link href="/owner/signup">List Your Beauty Business</Link>
                    </Button>
                </div>
                <div className="hidden md:block">
                    <Image 
                        src="https://placehold.co/600x600.png"
                        alt="Stylish salon interior"
                        width={600}
                        height={600}
                        className="rounded-lg object-cover shadow-2xl"
                        data-ai-hint="stylish salon interior"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PromoteSalon;
