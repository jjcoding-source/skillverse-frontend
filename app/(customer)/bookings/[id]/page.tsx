
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Phone, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  const booking = {
    id: params.id,
    service: "Bathroom Plumbing Repair",
    status: "In Progress",
    date: "Today, November 5, 2025",
    time: "10:00 AM - 12:00 PM",
    address: "24, Rose Garden Colony, Kakkanad, Kochi — 682030",
    amount: 455,
    worker: {
      name: "Ramesh Kumar",
      role: "Master Plumber",
      rating: 4.9,
      avatar: "👷",
      phone: "+91 98765 43210"
    },
    otp: "7429",
    timeline: [
      { time: "9:12 AM", event: "Booking Placed", status: "done", note: "Payment of ₹455 held in escrow" },
      { time: "9:18 AM", event: "Worker Accepted", status: "done", note: "Ramesh Kumar accepted your request" },
      { time: "10:15 AM", event: "Job Started", status: "active", note: "OTP verified • Worker arrived" },
      { time: "—", event: "Job Completed", status: "pending", note: "Awaiting completion confirmation" },
      { time: "—", event: "Payment Released", status: "pending", note: "Funds will be released to worker" },
    ]
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/customer/bookings" className="text-blue-600 hover:underline flex items-center gap-2 mb-4">
          ← Back to My Bookings
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-gray-500">BOOKING #{booking.id.toUpperCase()}</div>
            <h1 className="text-4xl font-bold tracking-tight mt-1">{booking.service}</h1>
          </div>
          <Badge className="bg-blue-600 text-white px-6 py-2 text-base">IN PROGRESS</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Live Status Banner */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <div className="text-blue-200 text-sm font-medium">CURRENT STATUS</div>
                <div className="text-3xl font-semibold mt-3">Job In Progress</div>
                <div className="mt-4 text-blue-100">Worker arrived at 10:15 AM • OTP verified</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-blue-200 mb-2">SHARE THIS OTP WITH WORKER</div>
                <div className="text-6xl font-mono tracking-[12px] font-bold bg-white/10 rounded-2xl p-6 inline-block">
                  {booking.otp}
                </div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-8">Booking Timeline</h3>
            <div className="space-y-10">
              {booking.timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                      ${item.status === 'done' ? 'bg-emerald-600 border-emerald-600 text-white' : 
                        item.status === 'active' ? 'bg-blue-600 border-blue-600 text-white' : 
                        'bg-gray-100 border-gray-300 text-gray-400'}`}>
                      {item.status === 'done' ? '✓' : item.status === 'active' ? '●' : index + 1}
                    </div>
                    {index < booking.timeline.length - 1 && (
                      <div className={`w-0.5 h-12 bg-gray-200 ml-5 mt-2 ${item.status === 'done' ? 'bg-emerald-600' : ''}`} />
                    )}
                  </div>
                  <div className="pt-1">
                    <div className={`font-semibold ${item.status === 'active' ? 'text-blue-600' : ''}`}>
                      {item.event}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{item.time}</div>
                    {item.note && <div className="text-sm text-gray-600 mt-3">{item.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Worker Info */}
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6">Your Worker</h3>
            <div className="flex items-center gap-6">
              <div className="text-6xl">{booking.worker.avatar}</div>
              <div className="flex-1">
                <div className="text-2xl font-semibold">{booking.worker.name}</div>
                <div className="text-gray-600">{booking.worker.role}</div>
                <div className="flex items-center gap-2 mt-3">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="font-medium">{booking.worker.rating}</span>
                  <span className="text-gray-500">(120 reviews)</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" /> Call
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageCircle className="w-4 h-4" /> Message
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-8">
            <h3 className="font-semibold mb-6">Booking Information</h3>
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-gray-500">Service</div>
                <div className="font-medium mt-1">{booking.service}</div>
              </div>
              <div>
                <div className="text-gray-500">Scheduled</div>
                <div className="font-medium mt-1">{booking.date} • {booking.time}</div>
              </div>
              <div>
                <div className="text-gray-500">Address</div>
                <div className="font-medium mt-1">{booking.address}</div>
              </div>
              <div>
                <div className="text-gray-500">Total Amount</div>
                <div className="font-semibold text-xl mt-1">₹{booking.amount}</div>
                <div className="text-xs text-emerald-600">Held in Escrow</div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="font-semibold mb-6">Need Help?</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                💬 Chat with Support
              </Button>
              <Button variant="destructive" className="w-full justify-start gap-3 h-12">
                ⚠️ Raise a Dispute
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-8 text-center">
              Our team is available 8 AM - 8 PM
            </div>
          </Card>

          <Button variant="outline" className="w-full py-6 text-red-600 border-red-200 hover:bg-red-50">
            Cancel Booking
          </Button>
        </div>
      </div>
    </div>
  );
}