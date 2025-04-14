export function Switch({ checked, onCheckedChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckedChange}
        className="sr-only"
      />
      <div
        className={`w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${
          checked ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        <div
          className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </div>
    </label>
  );
}
