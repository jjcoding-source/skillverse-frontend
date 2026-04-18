
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Star, TrendingUp } from 'lucide-react';

export default function WorkerDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Good morning, Ramesh 👋</h1>
          <p className="text-gray-600 mt-2">Tuesday, November 5, 2025 • Kochi area</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-emerald-100 text-emerald-700 px-4 py-1.5">
            ✓ Verified Worker
          </Badge>
          <Button variant="outline" size="sm">
            🔔 3 new requests
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">💰</div>
            <div>
              <div className="text-sm text-gray-500">Today's Earnings</div>
              <div className="text-3xl font-bold mt-1">₹1,200</div>
              <div className="text-xs text-emerald-600 mt-1">↑ 2 jobs done</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">📅</div>
            <div>
              <div className="text-sm text-gray-500">This Week</div>
              <div className="text-3xl font-bold mt-1">₹5,840</div>
              <div className="text-xs text-emerald-600 mt-1">↑ 8 jobs</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl">⭐</div>
            <div>
              <div className="text-sm text-gray-500">Avg Rating</div>
              <div className="text-3xl font-bold mt-1">4.9</div>
              <div className="text-xs text-gray-500 mt-1">120 reviews</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">✅</div>
            <div>
              <div className="text-sm text-gray-500">Acceptance Rate</div>
              <div className="text-3xl font-bold mt-1">94%</div>
              <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
            </div>
          </div>
        </Card>
      </div>

      {/* New Job Requests Alert */}
      <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-3xl mb-10 border-0">
        <div className="flex justify-between items-center">
          <div>
            <div className="uppercase tracking-widest text-emerald-200 text-xs font-semibold mb-2">⚡ NEW REQUESTS</div>
            <h3 className="text-2xl font-semibold">3 job requests waiting for you</h3>
            <p className="text-emerald-100 mt-2">Expires in 10 minutes — respond quickly to boost your ranking</p>
          </div>
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
            View All Requests →
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-3">
          <Card className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">Today's Schedule</h3>
              <Button variant="outline" size="sm">View Full Calendar</Button>
            </div>

            <div className="space-y-6">
              {/* In Progress */}
              <div className="flex gap-5 p-5 border border-emerald-200 bg-emerald-50 rounded-2xl">
                <div className="text-4xl">🔧</div>
                <div className="flex-1">
                  <div className="font-semibold text-lg">Bathroom Plumbing Repair</div>
                  <div className="text-sm text-gray-600 mt-1 flex items-center gap-4">
                    <span>10:00 AM</span>
                    <span>•</span>
                    <span>Kakkanad</span>
                    <span>•</span>
                    <span>Anita Sharma</span>
                  </div>
                </div>
                <div>
                  <Badge className="bg-emerald-600">IN PROGRESS</Badge>
                  <div className="text-right mt-2 text-emerald-700 font-semibold">₹350</div>
                </div>
              </div>

              {/* Upcoming */}
              <div className="flex gap-5 p-5 border rounded-2xl">
                <div className="text-4xl">🧹</div>
                <div className="flex-1">
                  <div className="font-semibold">Kitchen Deep Cleaning</div>
                  <div className="text-sm text-gray-600 mt-1">2:00 PM • Edapally • Priya Menon</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline">UPCOMING</Badge>
                  <div className="text-emerald-700 font-semibold mt-2">₹580</div>
                </div>
              </div>

              <div className="flex gap-5 p-5 border rounded-2xl">
                <div className="text-4xl">🪚</div>
                <div className="flex-1">
                  <div className="font-semibold">Shelf Installation</div>
                  <div className="text-sm text-gray-600 mt-1">5:00 PM • Aluva • Sanjay Nair</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline">UPCOMING</Badge>
                  <div className="text-emerald-700 font-semibold mt-2">₹270</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Earnings & Rating */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weekly Earnings */}
          <Card className="p-8">
            <div className="flex justify-between mb-6">
              <h3 className="font-semibold">Earnings This Week</h3>
              <span className="text-emerald-600 font-semibold">₹5,840</span>
            </div>
            <div className="h-40 flex items-end gap-3">
              {[40, 70, 55, 90, 65, 25, 25].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className={`w-full rounded-t ${i === 4 ? 'bg-emerald-600' : 'bg-emerald-200'}`} 
                    style={{ height: `${height}%` }}
                  />
                  <div className="text-[10px] text-gray-400">M T W T F S S</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Your Rating */}
          <Card className="p-8">
            <h3 className="font-semibold mb-6">Your Rating</h3>
            <div className="flex items-center gap-6 mb-8">
              <div className="text-6xl font-bold">4.9</div>
              <div>
                <div className="text-3xl text-amber-500">★★★★★</div>
                <div className="text-sm text-gray-500 mt-1">120 total reviews</div>
              </div>
            </div>

            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4 text-sm">
                  <div className="w-4 text-right">{star}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded">
                    <div 
                      className="h-2 bg-amber-500 rounded" 
                      style={{ width: star === 5 ? '85%' : star === 4 ? '12%' : '3%' }}
                    />
                  </div>
                  <div className="w-8 text-gray-500">{star === 5 ? '102' : star === 4 ? '14' : '4'}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}