'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ClipboardList, PlayCircle, DollarSign, User, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/worker/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/worker/jobs', label: 'Job Requests', icon: ClipboardList },
  { href: '/worker/job/[id]', label: 'Active Job', icon: PlayCircle },
  { href: '/worker/earnings', label: 'Earnings', icon: DollarSign },
  { href: '#', label: 'My Profile', icon: User },
];

export function WorkerSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-emerald-600">SkillVerse</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href.split('/')[2]);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-emerald-50 text-emerald-600" 
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