
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-blue-600">SkillVerse</div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition">Find Services</a>
            <a href="#how" className="hover:text-blue-600 transition">How It Works</a>
            <a href="#" className="hover:text-blue-600 transition">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Join Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
              🏠 Trusted Home Services Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-6">
              Book Verified<br />
              Home Experts<br />
              <span className="text-blue-600">In Minutes.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md mb-10">
              Connect with skilled professionals for plumbing, electrical, cleaning, and more. 
              Transparent pricing, real-time tracking, guaranteed quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="w-full sm:w-auto">Book a Service</Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Become a Partner
              </Button>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <div className="text-3xl font-bold">12,000+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1,800+</div>
                <div className="text-sm text-gray-500">Verified Workers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-blue-100 to-sky-200 rounded-3xl h-[420px] flex items-center justify-center relative overflow-hidden">
              <div className="text-[180px] opacity-20">🏠</div>
            </div>

            {/* Floating cards */}
            <Card className="absolute -bottom-6 -left-6 p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-semibold">3 workers available nearby</span>
              </div>
            </Card>

            <Card className="absolute top-12 -right-8 p-5 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">4.9</div>
                <div className="text-amber-500 text-xl">★★★★★</div>
                <div className="text-xs text-gray-500 mt-1">Service Rating</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-8 text-center text-sm">
        © 2026 SkillVerse. All rights reserved.
      </footer>
    </div>
  );
}