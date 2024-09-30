import React from "react";

import { cn } from "@/lib/utils";

interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-lg font-bold font-primary text-primary-celeste"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={cn(
          "w-full px-3 py-1 text-xl leading-8 transition-colors duration-200 ease-in-out outline-none text-primary-celeste rounded-xl focus:bg-transparent focus:ring-2 focus:ring-primary-blue focus:border-primary-celest"
        )}
      />
    </div>
  );
};

export default InputField;
