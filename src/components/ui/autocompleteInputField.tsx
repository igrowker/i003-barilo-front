import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState, forwardRef } from "react";

interface AutocompleteInputFieldProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

const AutocompleteInputField = forwardRef<HTMLInputElement, AutocompleteInputFieldProps>(
  ({ label, name, required = false, placeholder }, ref) => {
    const { register, setValue, formState: { errors } } = useFormContext();

    const [inputValue, setInputValue] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const calendarRef = useRef<HTMLDivElement | null>(null);

    const handleDateChange = (date: Date) => {
      setSelectedDate(date);
      const formattedDate = format(date, "yyyy-MM-dd");
      setInputValue(formattedDate);
      setValue(name, formattedDate);
      setShowCalendar(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowCalendar(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    return (
      <FormItem>
        <FormLabel
          htmlFor={name}
          className="text-lg font-bold font-primary text-primary-celeste"
        >
          {label}
        </FormLabel>
        <FormControl>
          <div className="relative">
            <Input
              id={name}
              {...register(name, { required })}
              type="text"
              placeholder={placeholder || "Seleccionar fecha"}
              required={required}
              value={inputValue}
              onFocus={() => setShowCalendar(true)}
              readOnly
              className={cn("w-full", errors[name] && "border-red-500")}
              ref={ref}
            />
            {showCalendar && (
              <div ref={calendarRef} className="absolute z-10 w-auto mt-2 overflow-auto bg-white border rounded-md shadow-lg border-primary-blue">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateChange}
                  className="p-2"
                />
              </div>
            )}
          </div>
        </FormControl>
      </FormItem>
    );
  }
);

AutocompleteInputField.displayName = "AutocompleteInputField";

export default AutocompleteInputField;
