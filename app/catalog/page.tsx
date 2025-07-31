'use client';
import { cars } from '@/lib/dummyData';
import CarCard from '@/components/CarCard';
import Navbar from '@/components/Navbar';

export default function Catalog() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-primary">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </section>
    </main>
  );
}
