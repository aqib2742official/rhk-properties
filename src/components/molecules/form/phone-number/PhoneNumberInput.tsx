"use client";
import React, { forwardRef, useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phone-number-input.css";
import FormError from "../FormError";
import Label from "../Label";

interface PhoneNumberInputProps {
  value?: string;
  onChange: (value: string, country?: any) => void;
  defaultCountry?: string;
  onlyCountries?: string[];
  preferredCountries?: string[];
  label?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  onBlur?: () => void;
}

const PhoneNumberInput = forwardRef<any, PhoneNumberInputProps>(
  (
    {
      value = "",
      onChange,
      defaultCountry = "ae", // UAE as default
      onlyCountries,
      preferredCountries = ["ae", "sa", "us", "gb"],
      label,
      required = false,
      error,
      disabled = false,
      placeholder = "Enter phone number",
      className = "",
      id,
      name,
      onBlur,
    },
    _ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dropdownDirection, setDropdownDirection] = useState<"down" | "up">("down");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleChange = (phone: string, country: any) => {
      onChange(phone, country);
    };

    useEffect(() => {
      const handleDropdownPosition = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const spaceBelow = window.innerHeight - rect.bottom;
          const spaceAbove = rect.top;
          const dropdownHeight = 250; // Approximate dropdown height

          // If not enough space below but more space above, show dropdown on top
          if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
            setDropdownDirection("up");
          } else {
            setDropdownDirection("down");
          }
        }
      };

      // Check on mount and window resize
      handleDropdownPosition();
      window.addEventListener("resize", handleDropdownPosition);
      window.addEventListener("scroll", handleDropdownPosition);

      return () => {
        window.removeEventListener("resize", handleDropdownPosition);
        window.removeEventListener("scroll", handleDropdownPosition);
      };
    }, []);

    // Track dropdown open/close state
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };

      const handleDropdownToggle = () => {
        const dropdown = containerRef.current?.querySelector('.country-list');
        if (dropdown) {
          setIsDropdownOpen(true);
        } else {
          setIsDropdownOpen(false);
        }
      };

      // Listen for clicks on the flag button
      const flagButton = containerRef.current?.querySelector('.flag-dropdown');
      if (flagButton) {
        flagButton.addEventListener('click', handleDropdownToggle);
      }

      // Check for dropdown visibility changes
      const observer = new MutationObserver(() => {
        const dropdown = containerRef.current?.querySelector('.country-list');
        setIsDropdownOpen(!!dropdown);
      });

      if (containerRef.current) {
        observer.observe(containerRef.current, {
          childList: true,
          subtree: true,
        });
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        observer.disconnect();
        if (flagButton) {
          flagButton.removeEventListener('click', handleDropdownToggle);
        }
      };
    }, []);

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <Label htmlFor={id}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}

        <div className="relative" ref={containerRef}>
          <PhoneInput
            country={defaultCountry}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            disabled={disabled}
            placeholder={placeholder}
            onlyCountries={onlyCountries}
            preferredCountries={preferredCountries}
            enableSearch={true}
            searchPlaceholder="Search country"
            inputProps={{
              name: name,
              id: id,
              required: required,
              autoComplete: "tel",
            }}
            containerClass={`phone-input-container ${
              error ? "phone-input-error" : ""
            } ${disabled ? "phone-input-disabled" : ""} ${
              dropdownDirection === "up" ? "phone-input-dropup" : ""
            } ${isDropdownOpen ? "phone-dropdown-open" : ""}`}
            inputClass={`phone-input-field ${
              error
                ? "!border-red-500 focus:!border-red-500 focus:!ring-red-500/10"
                : ""
            }`}
            buttonClass="phone-input-button"
            dropdownClass="phone-input-dropdown"
            searchClass="phone-input-search"
          />
        </div>

        {/* Error Message */}
        {error && <FormError message={error} />}
      </div>
    );
  }
);

PhoneNumberInput.displayName = "PhoneNumberInput";

export default PhoneNumberInput;
