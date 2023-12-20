import { forwardRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icons } from "./Icons";

export const Input = forwardRef(
  (
    {
      className,
      type,
      disabled,
      leftIcon,
      value,
      clearValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [clearCross, setClearCross] = useState(false);

    useEffect(() => {
      if (value.length > 0) setClearCross(true);
      else setClearCross(false);
    }, [value]);

    return (
      <div className="relative">
        {leftIcon}
        <input
          type={type}
          className={twMerge(
            `
            flex 
            w-full 
            rounded-md 
            bg-neutral-700
            border
            border-transparent
            px-3 
            py-3 
            text-sm 
            file:border-0 
            file:bg-transparent 
            file:text-sm 
            file:font-medium 
            placeholder:text-neutral-400 
            disabled:cursor-not-allowed 
            disabled:opacity-50
            focus:outline-none
          `,
            disabled && "opacity-75",
            className,
            leftIcon && "pl-11",
            clearCross && "pr-11"
          )}
          disabled={disabled}
          ref={ref}
          value={value}
          onChange={(e) => {
            onChange?.(e);
          }}
          {...props}
        />

        {clearCross && (
          <button
            onClick={clearValue}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Icons.close className="w-4 h-4 " />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
