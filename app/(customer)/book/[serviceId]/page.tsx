
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BookServicePage({ params }: { params: { serviceId: string } }) {
  const [step, setStep] = useState(1); 
  const [selectedDate, setSelectedDate] = useState<string>("2025-11-07");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [address, setAddress] = useState("24, Rose Garden Colony, Kakkanad, Kochi — 682030");

  const service = {
    id: params.serviceId,
    name: "Pipe Repair & Leak Fix",
    emoji: "🔧",
    price: 350,
    duration: "1-2 hours",
    rating: 4.8,
  };

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-5xl mx-auto px-6 pt-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center gap-3 mb-8">
          <Link href="/customer/services" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500">Booking for {service.name}</span>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all
                ${step === s ? 'bg-blue-600 text-white border-blue-600' : 
                  step > s ? 'bg-emerald-600 text-white border-emerald-600' : 
                  'bg-white border-gray-300 text-gray-400'}`}>
                {step > s ? '✓' : s}
              </div>
              {s < 4 && <div className={`h-0.5 w-12 mx-3 ${step > s ? 'bg-emerald-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column - Form */}
          <div className="lg:col-span-7">
            <Card className="p-10">
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-8">Select Date</h2>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {Array.from({ length: 14 }).map((_, i) => {
                      const date = new Date();
                      date.setDate(date.getDate() + i);
                      const isSelected = date.toISOString().split('T')[0] === selectedDate;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                          className={`p-4 rounded-2xl text-sm font-medium transition-all ${isSelected ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                        >
                          {date.getDate()}<br />
                          <span className="text-xs opacity-70">{date.toLocaleString('default', { weekday: 'short' })}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-8">Select Time Slot</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-6 border rounded-2xl text-center font-medium transition-all ${selectedTime === time ? 'border-blue-600 bg-blue-50 text-blue-700' : 'hover:border-gray-400'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-8">Service Address</h2>
                  <div className="space-y-4">
                    <div className="p-6 border-2 border-blue-600 rounded-2xl bg-blue-50">
                      <div className="font-semibold">Home (Default)</div>
                      <div className="text-sm text-gray-600 mt-1">{address}</div>
                    </div>
                    <button className="w-full py-4 border border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">
                      + Add New Address
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-8">Confirm Booking</h2>
                  <div className="space-y-6">
                    <div className="p-6 border rounded-2xl">
                      <div className="font-medium">Service</div>
                      <div className="text-lg mt-1">{service.name}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 border rounded-2xl">
                        <div className="font-medium">Date</div>
                        <div className="text-lg mt-1">{new Date(selectedDate).toDateString()}</div>
                      </div>
                      <div className="p-6 border rounded-2xl">
                        <div className="font-medium">Time</div>
                        <div className="text-lg mt-1">{selectedTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-5">
            <Card className="sticky top-8 p-8">
              <h3 className="font-semibold text-xl mb-6">Order Summary</h3>

              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{service.emoji}</div>
                <div>
                  <div className="font-semibold">{service.name}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span>₹{service.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Platform Fee</span>
                  <span>₹35</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (18%)</span>
                  <span>₹70</span>
                </div>
              </div>

              <div className="border-t my-6" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total Amount</span>
                <span>₹455</span>
              </div>

              <div className="mt-8 text-xs text-emerald-700 bg-emerald-50 p-4 rounded-xl">
                🔒 Your payment will be held securely in escrow and released only after job completion.
              </div>

              {step < 4 ? (
                <Button 
                  onClick={() => setStep(step + 1)} 
                  className="w-full mt-8 py-7 text-base"
                >
                  Continue
                </Button>
              ) : (
                <Button className="w-full mt-8 py-7 text-base bg-emerald-600 hover:bg-emerald-700">
                  Pay ₹455 Securely →
                </Button>
              )}

              <div className="text-center text-xs text-gray-500 mt-6">
                Secured by Razorpay • Cancel anytime before worker arrives
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}