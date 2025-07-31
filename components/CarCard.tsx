type CarCardProps = {
  name: string;
  price: string;
  mileage: string;
  image: string;
};

export default function CarCard({ name, price, mileage, image }: CarCardProps) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg p-4 bg-white transition-all">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-2" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{mileage}</p>
      <p className="text-primary font-semibold">{price}</p>
    </div>
  );
}
