'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, MessageSquare, CreditCard, Settings, LogOut, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/customer/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/customer/services', label: 'Browse Services', icon: Calendar },
  { href: '/customer/bookings', label: 'My Bookings', icon: Calendar },
  { href: '#', label: 'Messages', icon: MessageSquare },
  { href: '#', label: 'Payments', icon: CreditCard },
  { href: '/customer/profile', label: 'Settings', icon: Settings },
];

export function CustomerSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-blue-600">SkillVerse</div>
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full gap-2" size="lg">
          <Plus className="w-4 h-4" />
          Book a Service
        </Button>
      </div>

      <nav className="flex-1 px-3 py-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t mt-auto">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}