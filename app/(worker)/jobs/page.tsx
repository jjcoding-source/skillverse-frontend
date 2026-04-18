
'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Star } from 'lucide-react';

const requests = [
  {
    id: "REQ-8821",
    service: "Emergency Pipe Burst Fix",
    category: "Plumbing",
    emoji: "🔧",
    payout: 650,
    timeLeft: "02:34",
    urgent: true,
    date: "Today, ASAP",
    location: "Kakkanad • 2.1 km",
    customerRating: 4.8,
  },
  {
    id: "REQ-8819",
    service: "Wardrobe Assembly & Fitting",
    category: "Carpentry",
    emoji: "🪚",
    payout: 480,
    timeLeft: "07:48",
    urgent: false,
    date: "Tomorrow, 10:00 AM",
    location: "Edapally • 4.7 km",
    customerRating: 5.0,
  },
  {
    id: "REQ-8815",
    service: "Full Home Deep Cleaning",
    category: "Cleaning",
    emoji: "🧹",
    payout: 960,
    timeLeft: "09:15",
    urgent: false,
    date: "Nov 7, 9:00 AM",
    location: "Thrikkakara • 6.2 km",
    customerRating: 4.6,
  },
];

export default function WorkerJobsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Job Requests</h1>
          <p className="text-gray-600 mt-2">3 new requests matched to your skills • Respond quickly</p>
        </div>
        <div className="text-sm text-emerald-600 font-medium">Acceptance Rate: 94%</div>
      </div>

      {/* Urgent Alert */}
      <div className="bg-amber-100 border border-amber-300 text-amber-800 p-5 rounded-2xl mb-10 flex items-center gap-4">
        <div className="text-2xl">⚡</div>
        <div>
          <span className="font-semibold">Respond quickly!</span> Accepting more requests improves your ranking and visibility to customers.
        </div>
      </div>

      <div className="space-y-6">
        {requests.map((req) => (
          <Card key={req.id} className={`p-8 transition-all hover:shadow-xl ${req.urgent ? 'border-red-300' : ''}`}>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="text-7xl flex-shrink-0">{req.emoji}</div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">{req.service}</h3>
                    <div className="text-gray-600 mt-2 flex items-center gap-6">
                      <span>{req.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{req.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-4xl font-bold text-emerald-600">₹{req.payout}</div>
                    <div className="text-xs text-gray-500">your payout</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    ★★★★☆ <span className="text-gray-600 text-sm">({req.customerRating})</span>
                  </div>
                  {req.urgent && (
                    <Badge className="bg-red-100 text-red-700">URGENT</Badge>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:w-60">
                <div className={`flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-mono font-bold text-lg ${req.urgent ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                  <Clock className="w-5 h-5" />
                  {req.timeLeft} left
                </div>

                <Button 
                  className="py-7 text-lg bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => alert(`Accepted job ${req.id}`)}
                >
                  ✓ Accept Job
                </Button>

                <Button 
                  variant="outline" 
                  className="py-7 text-lg"
                  onClick={() => alert(`Rejected job ${req.id}`)}
                >
                  ✗ Reject
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent History */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6">Recent Responses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex justify-between">
              <div>Tap Replacement</div>
              <Badge className="bg-emerald-100 text-emerald-700">Accepted</Badge>
            </div>
            <div className="text-emerald-600 font-bold mt-4">₹220</div>
          </Card>
          <Card className="p-6">
            <div className="flex justify-between">
              <div>AC Servicing</div>
              <Badge variant="secondary">Rejected</Badge>
            </div>
            <div className="text-gray-400 mt-4">—</div>
          </Card>
          <Card className="p-6">
            <div className="flex justify-between">
              <div>Sink Installation</div>
              <Badge variant="outline">Expired</Badge>
            </div>
            <div className="text-gray-400 mt-4">—</div>
          </Card>
        </div>
      </div>
    </div>
  );
}