import Image from "next/image";

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Find Your Next Ride</h1>
        <p className="text-gray-600 mb-6">Browse our wide inventory of quality pre-owned vehicles.</p>
        <a href="/catalog" className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700">
          Browse Inventory
        </a>
      </section>
    </main>
  );
}
