'use client';
import { useState } from 'react';
import FormInput from '@/components/FormInput';

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-primary">Book an Appointment</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
          <FormInput label="Full Name" name="name" required />
          <FormInput label="Email Address" name="email" type="email" required />
          <FormInput label="Phone Number" name="phone" required />
          <FormInput label="Preferred Date" name="date" type="date" required />
          <FormInput label="Preferred Time" name="time" type="time" required />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-red-700">
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-700 font-semibold">Appointment request submitted! We'll get back to you soon.</p>
      )}
    </section>
  );
}
