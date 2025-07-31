'use client';
import { dummyCars } from '@/lib/dummyData';
import Navbar from '@/components/Navbar';

import CarCard from '../../components/CarCard';

export default function CatalogPage() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyCars.map((car) => <CarCard key={car.id} car={car} />)}
      </div>
    </section>
  );
}
