
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, Clock, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Welcome back, Anita 👋</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your home today</p>
        </div>
        <Link href="/customer/services">
          <Button size="lg" className="gap-2">
            <Plus className="w-5 h-5" />
            Book New Service
          </Button>
        </Link>
      </div>

      {/* Active Job Banner */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 mb-10 rounded-3xl border-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="uppercase text-blue-200 text-xs font-semibold tracking-widest mb-2">Currently Active</div>
            <h2 className="text-3xl font-semibold">Bathroom Plumbing Repair</h2>
            <div className="flex items-center gap-4 mt-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Today, 10:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kakkanad, Kochi</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-3">
              IN PROGRESS
            </Badge>
            <div>
              <div className="text-xs text-blue-200 mb-1">Share this OTP with worker</div>
              <div className="text-4xl font-mono tracking-[8px] font-bold">7429</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card className="p-6">
          <div className="text-sm text-gray-500">Active Requests</div>
          <div className="text-4xl font-bold mt-2">2</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-500">Total Spent</div>
          <div className="text-4xl font-bold mt-2">₹8,240</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-500">Jobs Completed</div>
          <div className="text-4xl font-bold mt-2">14</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-500">Saved Pros</div>
          <div className="text-4xl font-bold mt-2">5</div>
        </Card>
      </div>

      {/* Service Categories */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">What do you need today?</h3>
          <Link href="/customer/services" className="text-blue-600 font-medium hover:underline">
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { emoji: "🔧", name: "Plumbing" },
            { emoji: "⚡", name: "Electrical" },
            { emoji: "🧹", name: "Cleaning" },
            { emoji: "🪚", name: "Carpentry" },
            { emoji: "❄️", name: "HVAC" },
            { emoji: "🏠", name: "Smart Home" },
          ].map((cat) => (
            <Link key={cat.name} href="/customer/services">
              <Card className="p-6 hover:border-blue-300 transition-all hover:shadow-md text-center">
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <div className="font-semibold">{cat.name}</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Recent Bookings</h3>
          <Link href="/customer/bookings" className="text-blue-600 font-medium hover:underline">
            View all bookings →
          </Link>
        </div>

        <div className="space-y-4">
          {/* Active Booking */}
          <Card className="p-6 border-blue-200 bg-blue-50/50">
            <div className="flex items-start gap-5">
              <div className="text-4xl">🔧</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold text-lg">Bathroom Plumbing Repair</div>
                    <div className="text-sm text-gray-600 mt-1">Ramesh Kumar • Today, 10:00 AM</div>
                  </div>
                  <Badge className="bg-blue-600">IN PROGRESS</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Upcoming */}
          <Card className="p-6">
            <div className="flex items-start gap-5">
              <div className="text-4xl">🧹</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">Full Home Deep Cleaning</div>
                    <div className="text-sm text-gray-600 mt-1">Tomorrow, 9:00 AM • CleanPro Team</div>
                  </div>
                  <Badge variant="outline">UPCOMING</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Completed */}
          <Card className="p-6">
            <div className="flex items-start gap-5">
              <div className="text-4xl">⚡</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">Fan & Light Installation</div>
                    <div className="text-sm text-gray-600 mt-1">Oct 15 • Priya Nair</div>
                  </div>
                  <Badge variant="secondary">COMPLETED</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}