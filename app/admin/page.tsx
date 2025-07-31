export default function AdminDashboard() {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border shadow bg-white rounded-lg">
          <h2 className="font-semibold text-lg mb-2">New Appointment Requests</h2>
          <p className="text-gray-600">View and manage upcoming test drives.</p>
        </div>
        <div className="p-6 border shadow bg-white rounded-lg">
          <h2 className="font-semibold text-lg mb-2">Find My Car Leads</h2>
          <p className="text-gray-600">Review customer interest & car preferences.</p>
        </div>
      </div>
    </section>
  );
}
