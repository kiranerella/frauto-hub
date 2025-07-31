type Props = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

export default function FormInput({ label, name, type = "text", required = false }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="w-full border rounded px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
