

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  MessageCircle,
  Heart,
  MapPin,
  Star,
  Settings,
  Search,
  Plus,
  TrendingUp,
  ChevronRight,
  History
} from "lucide-react";
import Image from 'next/image';
import type { Salon } from '@/lib/types';
import { useGeolocation } from '@/hooks/use-geolocation';

const favoritedSalons: Salon[] = [
    {
    id: 1,
    name: 'Afro Chic Hair Studio',
    image: 'https://images.unsplash.com/photo-1702236240794-58dc4c6895e5?w=400',
    imageHint: 'braided hairstyle',
    location: 'Douala, Cameroon',
    rating: 4.8,
    reviews: 127,
    startingPrice: 15000,
    services: [],
    gallery: [],
  },
  {
    id: 2,
    name: 'Golden Nails Spa',
    image: 'https://images.unsplash.com/photo-1650176491728-a5e6edd08575?w=400',
    imageHint: 'nail art',
    location: 'Lagos, Nigeria',
    rating: 4.6,
    reviews: 89,
    startingPrice: 8000,
    services: [],
    gallery: [],
  }
];

const upcomingBookings = [
  {
    id: 1,
    salonName: 'Amber Glow Salon',
    service: 'Knotless Braids',
    date: 'August 28, 2024',
    time: '10:00 AM',
    status: 'Confirmed',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern salon interior',
  },
];


export default function CustomerDashboard() {

  const user = { name: 'Beauty Lover' };
  const { location: userLocation, error: locationError } = useGeolocation();
  const [favoriteIds, setFavoriteIds] = useState([1, 2]);
  const comparisonList: unknown[] = [];
  const notifications = [{isRead: false}];
  const unreadMessages = 2;
  const unreadNotifications = notifications.filter(n => !n.isRead).length;


  const stats = [
    { label: "Appointments", value: upcomingBookings.length, icon: Calendar, color: "text-purple-600", href: "/dashboard/customer/bookings" },
    { label: "Favorites", value: favoriteIds.length, icon: Heart, color: "text-pink-600", href: "/dashboard/customer/favorites" },
    { label: "Reviews", value: "12", icon: Star, color: "text-yellow-600", href: "#" },
    { label: "Comparing", value: comparisonList.length, icon: TrendingUp, color: "text-blue-600", href: "#" }
  ];

    const quickActions = [
    {
      icon: Search,
      title: "Find Salons",
      description: "Discover new salons near you",
      href: '/dashboard/customer/explore',
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your next beauty session",
      href: '/dashboard/customer/bookings',
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: "Messages",
      description: `${unreadMessages} new messages`,
      href: '/dashboard/customer/messages',
      color: "from-purple-600 to-pink-600",
      badge: unreadMessages > 0 ? unreadMessages : null
    },
    {
      icon: MapPin,
      title: "Near Me",
      description: "Salons in your area",
      href: '/dashboard/customer/explore',
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-beauty-secondary pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-warmgray-900 mb-2">
                Welcome back, {user?.name || 'Beauty Lover'}! ✨
              </h1>
              <div className="flex items-center gap-2 text-warmgray-600">
                <MapPin className="h-4 w-4" />
                <span>{userLocation ? `${userLocation.city}, ${userLocation.country}` : (locationError ||'Detecting location...')}</span>
                {unreadNotifications > 0 && (
                  <Badge variant="secondary" className="ml-4">
                    {unreadNotifications} new notifications
                  </Badge>
                )}
              </div>
            </div>
             <Button asChild variant="outline" size="sm" className="flex items-center gap-2">
                <Link href="/dashboard/customer/settings">
                    <Settings className="h-4 w-4" />
                    Settings
                </Link>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Link href={stat.href} key={index}>
                <Card className="bg-white border-purple-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-warmgray-600">{stat.label}</p>
                        <p className="text-2xl font-semibold text-warmgray-900">{stat.value}</p>
                      </div>
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-warmgray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link href={action.href} key={index}>
                    <Card
                    className="cursor-pointer hover:shadow-lg transition-all duration-200 bg-white border-purple-100 hover:border-purple-200 h-full"
                    >
                    <CardContent className="p-4">
                        <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                            <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        {action.badge && (
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs p-0 flex items-center justify-center">
                            {action.badge}
                            </Badge>
                        )}
                        </div>
                        <h3 className="font-medium text-warmgray-900 mb-1">{action.title}</h3>
                        <p className="text-sm text-warmgray-600">{action.description}</p>
                    </CardContent>
                    </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <Card className="bg-white border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Recent Bookings
              </CardTitle>
              <Button asChild variant="ghost" size="sm">
                <Link href="/dashboard/customer/bookings">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingBookings.length > 0 ? upcomingBookings.map((booking, index) => {
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-warmgray-900">{booking.salonName}</h4>
                      <p className="text-sm text-warmgray-600">{booking.date}</p>
                    </div>
                    <Badge variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}>
                      {booking.status}
                    </Badge>
                  </div>
                );
              }) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-warmgray-400 mx-auto mb-4" />
                  <p className="text-warmgray-600 mb-4">No bookings yet</p>
                  <Button asChild size="sm">
                    <Link href="/">
                        <Plus className="mr-2 h-4 w-4" />
                        Book Your First Appointment
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Favorite Salons */}
          <Card className="bg-white border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                Favorite Salons
              </CardTitle>
              <Button asChild variant="ghost" size="sm">
                <Link href="/dashboard/customer/favorites">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {favoritedSalons.length > 0 ? favoritedSalons.map((salon, index) => (
                <Link href="#" key={index}>
                    <div
                    className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg cursor-pointer hover:bg-pink-100 transition-colors"
                    >
                    <Image
                        src={salon.image}
                        alt={salon.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-ai-hint={salon.imageHint}
                    />
                    <div className="flex-1">
                        <h4 className="font-medium text-warmgray-900">{salon.name}</h4>
                        <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-sm text-warmgray-600 ml-1">{salon.rating}</span>
                        </div>
                        <span className="text-sm text-warmgray-500">•</span>
                        <span className="text-sm text-warmgray-600">{salon.location}</span>
                        </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-warmgray-400" />
                    </div>
                </Link>
              )) : (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-warmgray-400 mx-auto mb-4" />
                  <p className="text-warmgray-600 mb-4">No favorites yet</p>
                  <Button asChild size="sm">
                    <Link href="/">
                        <Search className="mr-2 h-4 w-4" />
                        Discover Salons
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 bg-white border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-purple-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-warmgray-900">Added Afro Chic Hair Studio to favorites</p>
                  <p className="text-xs text-warmgray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm text-warmgray-900">Left a 5-star review for Golden Nails Spa</p>
                  <p className="text-xs text-warmgray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-warmgray-900">Booked appointment at Amara Beauty Lounge</p>
                  <p className="text-xs text-warmgray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
