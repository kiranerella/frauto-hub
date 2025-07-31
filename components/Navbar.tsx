export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-primary">F&R Autosales</div>
      <div className="space-x-4">
        <a href="/" className="text-gray-700 hover:text-primary">Home</a>
        <a href="/catalog" className="text-gray-700 hover:text-primary">Inventory</a>
        <a href="/appointment" className="text-gray-700 hover:text-primary">Book</a>
      </div>
    </nav>
  );
}
