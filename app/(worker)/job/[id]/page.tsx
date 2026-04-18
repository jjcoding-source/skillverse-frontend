
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export default function WorkerActiveJobPage({ params }: { params: { id: string } }) {
  const [otp, setOtp] = useState(['7', '4', '2', '9']);
  const [jobStarted, setJobStarted] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const job = {
    id: params.id,
    service: "Bathroom Plumbing Repair",
    customer: "Anita Sharma",
    address: "24, Rose Garden Colony, Kakkanad, Kochi — 682030",
    time: "10:00 AM - 12:00 PM",
    payout: 350,
    notes: "Main valve is under the kitchen sink. Please bring sealant tape. Call before arriving.",
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleStartJob = () => {
    setJobStarted(true);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Live Banner */}
      <Card className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white p-8 rounded-3xl mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-emerald-200 text-xs font-semibold tracking-widest">⚡ JOB IN PROGRESS</div>
            <h1 className="text-3xl font-semibold mt-3">{job.service}</h1>
            <div className="mt-4 text-emerald-100 flex items-center gap-6">
              <span>📍 {job.address.split(',')[0]}</span>
              <span>Booking #{job.id.toUpperCase()}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-emerald-200">TIME ELAPSED</div>
            <div className="text-5xl font-mono font-bold tracking-wider mt-1">01:42:18</div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* OTP Section */}
          {!jobStarted && (
            <Card className="p-10">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-4xl mb-6">🔑</div>
                <h3 className="text-2xl font-semibold mb-3">Job Start Verification</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Ask the customer for the 4-digit OTP shown on their screen to officially start the job.
                </p>
              </div>

              <div className="mt-10">
                <div className="text-sm text-gray-500 mb-4 text-center">Enter 4-digit OTP</div>
                <div className="flex justify-center gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-16 h-16 text-center text-3xl font-bold border-2 border-gray-300 rounded-2xl focus:border-emerald-600 focus:outline-none"
                    />
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleStartJob}
                className="w-full mt-10 py-7 text-lg bg-emerald-600 hover:bg-emerald-700"
              >
                ✓ Verify OTP & Start Job
              </Button>
            </Card>
          )}

          {/* Customer Details */}
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6">Customer Details</h3>
            <div className="flex items-center gap-6">
              <div className="text-6xl">👩</div>
              <div className="flex-1">
                <div className="text-2xl font-semibold">{job.customer}</div>
                <div className="text-gray-600">⭐ 4.8 • 14 bookings with SkillVerse</div>
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

          {/* Job Location */}
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6">Job Location</h3>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📍</div>
              <div className="font-semibold text-lg">{job.address}</div>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700">
                Open in Google Maps →
              </Button>
            </div>
          </Card>

          {/* Job Details */}
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6">Job Details</h3>
            <div className="space-y-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Service</span>
                <span className="font-medium">{job.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Scheduled Time</span>
                <span className="font-medium">{job.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Your Payout</span>
                <span className="font-semibold text-emerald-600">₹{job.payout} (after 20% commission)</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-2">Customer Notes</span>
                <div className="bg-gray-50 p-5 rounded-xl text-sm leading-relaxed">
                  {job.notes}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Complete Job */}
        <div className="lg:col-span-4">
          <Card className="p-8 border-emerald-200 bg-emerald-50/50 sticky top-8">
            <h3 className="font-semibold text-xl mb-3">Ready to Complete?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Confirm all tasks are finished before marking the job complete. Payment will be released from escrow immediately after customer confirmation.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded flex items-center justify-center text-xs">✓</div>
                <span>Job started via OTP</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded flex items-center justify-center text-xs">✓</div>
                <span>Work completed successfully</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center" />
                <span>Area cleaned and tidy</span>
              </div>
            </div>

            <Button 
              onClick={() => setShowComplete(true)}
              className="w-full py-8 text-lg bg-emerald-600 hover:bg-emerald-700"
            >
              ✓ Mark Job as Complete
            </Button>

            <div className="text-center text-xs text-emerald-700 mt-6 bg-emerald-100 p-4 rounded-2xl">
              ₹{job.payout} will be added to your wallet once customer confirms
            </div>
          </Card>

          <Button variant="outline" className="w-full mt-6 text-red-600 border-red-200">
            Report an Issue
          </Button>
        </div>
      </div>
    </div>
  );
}