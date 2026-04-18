
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    category: "Plumbing",
    name: "Pipe Repair & Leak Fix",
    emoji: "🔧",
    price: 350,
    unit: "per visit",
    rating: 4.8,
    reviews: 214,
    duration: "1-2 hrs",
    popular: true,
  },
  {
    id: 2,
    category: "Electrical",
    name: "Wiring & Fitting",
    emoji: "⚡",
    price: 450,
    unit: "per visit",
    rating: 4.9,
    reviews: 180,
    duration: "1-3 hrs",
    popular: false,
  },
  {
    id: 3,
    category: "Cleaning",
    name: "Full Home Deep Cleaning",
    emoji: "🧹",
    price: 1200,
    unit: "per session",
    rating: 4.7,
    reviews: 320,
    duration: "4-5 hrs",
    popular: true,
  },
  {
    id: 4,
    category: "Carpentry",
    name: "Custom Furniture & Fitting",
    emoji: "🪚",
    price: 600,
    unit: "per hour",
    rating: 4.8,
    reviews: 95,
    duration: "2-4 hrs",
    popular: false,
  },
  {
    id: 5,
    category: "HVAC",
    name: "AC Service & Repair",
    emoji: "❄️",
    price: 800,
    unit: "per unit",
    rating: 4.6,
    reviews: 112,
    duration: "2 hrs",
    popular: false,
  },
  {
    id: 6,
    category: "Smart Home",
    name: "Smart Locks & Lights Setup",
    emoji: "🏠",
    price: 1500,
    unit: "per setup",
    rating: 4.9,
    reviews: 64,
    duration: "3-4 hrs",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Browse Services</h1>
        <p className="text-gray-600 mt-2">260+ services from verified professionals near you</p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-4">
        {["All Services", "Plumbing", "Electrical", "Cleaning", "Carpentry", "HVAC", "Smart Home", "Painting"].map((cat, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center text-7xl relative">
              {service.emoji}
              {service.popular && (
                <Badge className="absolute top-4 left-4 bg-blue-600">Popular</Badge>
              )}
            </div>

            <div className="p-6">
              <div className="text-sm text-gray-500 mb-1">{service.category}</div>
              <h3 className="font-semibold text-lg leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500" />
                  {service.rating} ({service.reviews})
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-bold">₹{service.price}</span>
                  <span className="text-sm text-gray-500">/{service.unit}</span>
                </div>
                <Link href={`/customer/book/${service.id}`}>
                  <Button>Book Now</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load more */}
      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          Load More Services
        </Button>
      </div>
    </div>
  );
}