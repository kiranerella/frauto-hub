import Image from "next/image";

import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <section className="text-center py-20 bg-[url('/track-bg.svg')] bg-no-repeat bg-center bg-cover rounded-xl shadow-inner">
      <h1 className="text-5xl font-extrabold text-primary tracking-tight mb-4">Your Road to the Right Ride</h1>
      <p className="mt-2 text-lg text-gray-700 max-w-xl mx-auto">Explore premium used cars with confidence. Book a test drive or tell us what you're looking for and we'll track it down for you.</p>
      <div className="mt-8 flex justify-center gap-6">
        <a href="/catalog" className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-red-700 transition">Browse Inventory</a>
        <a href="/request" className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition">Find My Car</a>
      </div>
    </section>
  );
}

