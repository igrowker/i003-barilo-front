import React, { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  options?: string[];
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, name, required = false, type = "text", placeholder, options = [] },
    ref
  ) => {
    const { setValue, watch } = useFormContext();
    const formField = useFormField();
    const { error, formItemId } = formField || {};

    const inputValue = watch(name);
    const [filteredOptions, setFilteredOptions] = React.useState<string[]>([]);
    const [showDropdown, setShowDropdown] = React.useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue(name, value);
      setFilteredOptions(
        options.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowDropdown(true);
    };

    const handleSelectOption = (option: string) => {
      setValue(name, option);
      setShowDropdown(false);
    };

    return (
      <FormItem>
        <FormLabel
          htmlFor={formItemId}
          className="text-lg font-bold font-primary text-primary-celeste"
        >
          {label}
        </FormLabel>
        <FormControl>
          <div className="relative">
            <Input
              id={formItemId}
              name={name}
              type={type}
              placeholder={placeholder}
              required={required}
              value={inputValue || ""}
              onChange={handleInputChange}
              className={cn("w-full", error && "")}
              onFocus={() => {
                if (filteredOptions.length > 0) {
                  setShowDropdown(true);
                }
              }}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              autoComplete="off"
              ref={ref}
            />
            {showDropdown && filteredOptions.length > 0 && (
              <ul className="absolute z-10 w-full mt-2 overflow-y-auto bg-white border rounded-md shadow-lg border-primary-blue max-h-60">
                {filteredOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelectOption(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

export default InputField;
