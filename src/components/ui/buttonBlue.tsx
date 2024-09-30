import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonBlueVariants = cva(
  "w-full px-4 py-2 font-primary font-medium rounded-3xl transition-colors duration-300 text-xl",
  {
    variants: {
      variant: {
        active:
          "bg-active-button-bg text-active-button-text hover:bg-active-button-hover-bg",
        inactive:
          "bg-inactive-button-bg text-inactive-button-text hover:bg-active-button-hover-bg hover:text-active-button-text",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "active",
      size: "default",
    },
  }
);

interface ButtonBlueProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonBlueVariants> {
  text: string;
  isActive?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const ButtonBlue = React.forwardRef<HTMLButtonElement, ButtonBlueProps>(
  (
    {
      text,
      onClick,
      isActive = true,
      className = "",
      size,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        onClick={onClick}
        ref={ref}
        className={cn(
          buttonBlueVariants({
            variant: isActive ? "active" : "inactive",
            size,
            className,
          })
        )}
        {...props}
      >
        {text}
      </button>
    );
  }
);

ButtonBlue.displayName = "ButtonBlue";

export default ButtonBlue;
