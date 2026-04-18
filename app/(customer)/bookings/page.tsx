
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';

const bookings = {
  upcoming: [
    {
      id: "BK-2025-4483",
      service: "Full Home Deep Cleaning",
      worker: "CleanPro Team",
      date: "Tomorrow, 9:00 AM",
      address: "Kakkanad, Kochi",
      amount: 1340,
      status: "Accepted",
    },
    {
      id: "BK-2025-4484",
      service: "AC Service & Gas Refill",
      worker: "Arun Electricals",
      date: "Nov 10, 2:00 PM",
      address: "Thrikkakara, Kochi",
      amount: 980,
      status: "Pending",
    },
  ],
  ongoing: [
    {
      id: "BK-2025-4482",
      service: "Bathroom Plumbing Repair",
      worker: "Ramesh Kumar",
      date: "Today, 10:00 AM",
      address: "Kakkanad, Kochi",
      amount: 455,
      status: "In Progress",
      otp: "7429",
    },
  ],
  completed: [
    {
      id: "BK-2025-4479",
      service: "Fan & Light Installation",
      worker: "Priya Nair",
      date: "Oct 15, 2025",
      amount: 580,
      rating: 5,
    },
    {
      id: "BK-2025-4475",
      service: "Wardrobe Door Fitting",
      worker: "Suresh Menon",
      date: "Oct 10, 2025",
      amount: 740,
      rating: 4,
    },
  ],
};

export default function MyBookingsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">My Bookings</h1>
          <p className="text-gray-600 mt-2">Track and manage all your service requests</p>
        </div>
        <Link href="/customer/services">
          <Button>+ Book New Service</Button>
        </Link>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-8 bg-gray-100 p-1 rounded-xl">
          <TabsTrigger value="upcoming">Upcoming (2)</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing (1)</TabsTrigger>
          <TabsTrigger value="completed">Completed (11)</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        {/* Upcoming Tab */}
        <TabsContent value="upcoming">
          <div className="space-y-6">
            {bookings.upcoming.map((booking) => (
              <Card key={booking.id} className="p-8 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-6xl flex-shrink-0">🧹</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{booking.service}</h3>
                        <div className="text-gray-600 mt-2 flex items-center gap-6 text-sm">
                          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{booking.date}</span>
                          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{booking.address}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-emerald-700 border-emerald-200">{booking.status}</Badge>
                    </div>
                  </div>
                  <div className="text-right md:text-left">
                    <div className="text-2xl font-bold">₹{booking.amount}</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Link href={`/customer/bookings/${booking.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Button variant="destructive" size="sm">Cancel Booking</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Ongoing Tab */}
        <TabsContent value="ongoing">
          <Card className="p-8 border-blue-200 bg-blue-50/30">
            {bookings.ongoing.map((booking) => (
              <div key={booking.id} className="flex flex-col md:flex-row gap-8">
                <div className="text-6xl">🔧</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{booking.service}</h3>
                      <p className="text-gray-600 mt-2">Worker: {booking.worker}</p>
                    </div>
                    <Badge className="bg-blue-600">IN PROGRESS</Badge>
                  </div>

                  <div className="mt-8 p-6 bg-white rounded-2xl border">
                    <div className="text-sm text-gray-500 mb-3">Your OTP (Share with worker to start)</div>
                    <div className="text-5xl font-mono tracking-[12px] font-bold text-blue-700">{booking.otp}</div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </TabsContent>

        {/* Completed Tab */}
        <TabsContent value="completed">
          <div className="space-y-6">
            {bookings.completed.map((booking) => (
              <Card key={booking.id} className="p-8">
                <div className="flex gap-8">
                  <div className="text-5xl">⚡</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{booking.service}</h3>
                    <div className="text-sm text-gray-600 mt-2">Completed on {booking.date}</div>
                    <div className="flex items-center gap-2 mt-4">
                      <Star className="w-5 h-5 text-amber-500 fill-current" />
                      <span className="font-medium">{booking.rating}.0</span>
                      <span className="text-gray-500">• You rated this job</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹{booking.amount}</div>
                    <Link href={`/customer/bookings/${booking.id}`}>
                      <Button variant="outline" className="mt-4">View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Cancelled Tab */}
        <TabsContent value="cancelled">
          <Card className="p-16 text-center">
            <div className="text-6xl mb-6">😌</div>
            <h3 className="text-xl font-semibold mb-2">No cancelled bookings</h3>
            <p className="text-gray-500">All your bookings are active or completed successfully.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}