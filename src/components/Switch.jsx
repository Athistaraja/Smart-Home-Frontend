export function Switch({ checked, onCheckedChange }) {
    return (
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" checked={checked} onChange={onCheckedChange} className="hidden" />
        <div className={`w-10 h-5 bg-gray-400 rounded-full p-1 transition ${checked ? "bg-blue-500" : ""}`}>
          <div className={`h-4 w-4 bg-white rounded-full transform transition ${checked ? "translate-x-5" : ""}`} />
        </div>
      </label>
    );
  }
  