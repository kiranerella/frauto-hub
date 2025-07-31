'use client';
import { useState } from 'react';
import FormInput from '@/components/FormInput';

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    setSubmitted(true);
  };


  return (
    <section className="max-w-xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-primary">Tell Us What You’re Looking For</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
          <FormInput label="Full Name" name="name" required />
          <FormInput label="Email Address" name="email" type="email" required />
          <FormInput label="Budget ($)" name="budget" type="number" required />
          <FormInput label="Preferred Make or Model" name="model" />
          <FormInput label="Preferred Year or Range" name="year" />
          <FormInput label="Financing Needed (Y/N)" name="finance" />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-red-700">
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-700 font-semibold">Request received! We'll contact you when we have a match.</p>
      )}
    </section>
  );
}
