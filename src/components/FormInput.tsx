type FormInputProps = {
  label: string;
  type?: string;
  name: string;
};

export default function FormInput({ label, type = "text", name }: FormInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
}
