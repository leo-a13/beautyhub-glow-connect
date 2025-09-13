
'use client';

import { useState, useEffect } from 'react';
import { UserProvider } from '@/context/UserContext';
import type { User, Profile } from '@/lib/types';
import { createClient } from '@/lib/supabase/client';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarHeader,
  SidebarTitle,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import CustomerDashboardHeader from '@/app/dashboard/customer/header';
import { Home, Star, MessageSquare, Calendar, User as UserIcon, Settings, Sparkles, LogOut, LayoutDashboard, Search, Map } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { logout } from '@/app/auth/actions';

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      setUser(authUser);

      if (authUser) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', authUser.id)
          .single();
        setProfile(profileData);
      }
      setLoading(false);
    };

    fetchUserAndProfile();
  }, [supabase]);

  return (
    <UserProvider value={{ user, profile, loading }}>
      <SidebarProvider>
        <div className="flex min-h-screen flex-col">
          <CustomerDashboardHeader />
          <div className="flex flex-1">
            <Sidebar>
              <SidebarContent>
                <SidebarMenu>
                   <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                      <Link href="/dashboard/customer">
                        <Home />
                        <span>Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                      <Link href="/dashboard/customer/dashboard">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/explore">
                        <Search />
                        <span>Explore</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/map">
                        <Map />
                        <span>Map View</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/bookings">
                        <Calendar />
                        <span>Bookings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/messages">
                        <MessageSquare />
                        <span>Messages</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/favorites">
                        <Star />
                        <span>Favorites</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/beauty-tips">
                        <Sparkles />
                        <span>Beauty Tips</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>

                <SidebarSeparator />

                <SidebarMenu>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/profile">
                        <UserIcon />
                        <span>Profile</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/dashboard/customer/settings">
                        <Settings />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <form action={logout} className="w-full">
                      <Button type="submit" variant="outline" className="w-full justify-start">
                          <LogOut className="mr-2" />
                          Sign Out
                      </Button>
                    </form>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset className="flex flex-1 flex-col">
               <main className="flex-1 bg-gradient-beauty-secondary">
                {children}
              </main>
            </SidebarInset>
          </div>
        </div>
      </SidebarProvider>
    </UserProvider>
  );
}
