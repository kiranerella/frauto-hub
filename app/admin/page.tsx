'use client';
import { useEffect, useState } from 'react';

type Appointment = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/admin/appointments');
      const data = await res.json();
      setAppointments(data);
    };
    load();
  }, []);

  return (
    <section className="py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>

      <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      <div className="overflow-x-auto border rounded-lg bg-white shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-t">
                <td className="p-3">{a.name}</td>
                <td className="p-3">{a.email}</td>
                <td className="p-3">{a.phone}</td>
                <td className="p-3">{a.date}</td>
                <td className="p-3">{a.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
