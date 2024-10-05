import { Label } from "@/components/ui/label";
import { Bus, Plane } from "lucide-react";

export function Switch({ checked, onCheckedChange }) {
  return (
    <div className="flex items-center space-x-5">
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative w-[4.29rem] h-9 bg-primary-blue rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${
          checked ? 'bg-primary-blue' : ''
        }`}
      >
        <span
          className={`block w-8 h-8 ml-[0.14rem] bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            checked ? 'translate-x-8' : ''
          }`}
        >
          {checked ? (
            <Plane className="pt-1 pl-1 w-7 h-7 text-primary-pink" />
          ) : (
            <Bus className="pt-1 pl-1 w-7 h-7 text-primary-purple" />
          )}
        </span>
      </button>
      <Label htmlFor="transport-mode" className="text-xl font-semibold text-primary-purple font-primary">
        {checked ? "Viajes en Avión" : "Viajes en Autobús"}
      </Label>
    </div>
  );
}
