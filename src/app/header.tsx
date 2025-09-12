
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore Salons' },
  { href: '/#blog', label: 'Beauty Tips' },
];

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: any, session: { user: any; }) => {
      setUser(session?.user ?? null);
    });

    const fetchUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
    }
    fetchUser();

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const dashboardHref = user?.user_metadata?.role === 'owner' ? '/dashboard/owner' : '/dashboard/customer';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            BeautyHub
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
           <Link
              href="/owner"
              className="transition-colors hover:text-primary"
            >
              For Salon Owners
            </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {user ? (
             <Button asChild>
                <Link href={dashboardHref}>Dashboard</Link>
             </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
               <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-bold">BeautyHub</span>
                </Link>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                    >
                        {link.label}
                    </Link>
                    ))}
                     <Link
                      href="/owner"
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      For Salon Owners
                    </Link>
                </nav>
                <div className="flex flex-col gap-4">
                    {user ? (
                        <Button asChild>
                          <Link href={dashboardHref}>Dashboard</Link>
                        </Button>
                    ) : (
                    <>
                      <Button variant="ghost" asChild>
                          <Link href="/login">Log In</Link>
                      </Button>
                      <Button style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} asChild>
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
