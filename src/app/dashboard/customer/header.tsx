import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bell, Sparkles, CalendarCheck, MessageSquarePlus } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const notifications = [
    {
        title: "Appointment Confirmed",
        description: "Your booking with Amber Glow Salon is confirmed for Aug 28.",
        icon: <CalendarCheck className="h-5 w-5 text-green-500" />,
        isRead: false,
    },
    {
        title: "New Message",
        description: "Serene Spa & Beauty sent you a message.",
        icon: <MessageSquarePlus className="h-5 w-5 text-purple-500" />,
        isRead: false,
    },
     {
        title: "Review Reminder",
        description: "Don't forget to leave a review for your recent visit to Dapper Cuts.",
        icon: <Sparkles className="h-5 w-5 text-yellow-500" />,
        isRead: true,
    }
]

const CustomerDashboardHeader = () => {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">
              BeautyHub
            </span>
          </Link>
        </div>
         <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 justify-center text-xs">{unreadCount}</Badge>
                    )}
                    <span className="sr-only">Notifications</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="p-4">
                    <h3 className="font-semibold">Notifications</h3>
                </div>
                <Separator />
                <div className="space-y-2 p-2">
                    {notifications.map((notification, index) => (
                        <div key={index} className={`flex items-start gap-3 p-2 rounded-lg ${!notification.isRead ? 'bg-primary/5' : ''}`}>
                           <div className="mt-1">{notification.icon}</div>
                            <div>
                                <p className="font-medium text-sm">{notification.title}</p>
                                <p className="text-xs text-muted-foreground">{notification.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Separator />
                <div className="p-2">
                     <Button variant="link" size="sm" className="w-full">View all notifications</Button>
                </div>
              </PopoverContent>
            </Popover>
        </div>
      </div>
    </header>
  );
};

export default CustomerDashboardHeader;
