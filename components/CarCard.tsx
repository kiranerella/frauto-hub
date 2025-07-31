type CarCardProps = {
  name: string;
  price: string;
  mileage: string;
  image: string;
};

export default function CarCard({ car }: { car: any }) {
  return (
    <div className="border rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 bg-white overflow-hidden">
      <img src={car.image} alt={car.model} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{car.make} {car.model}</h3>
        <p className="text-sm text-gray-500">{car.year} • {car.mileage} miles</p>
        <p className="text-primary font-bold text-lg mt-2">${car.price}</p>
      </div>
    </div>
  );
}
