'use client';

import { useState, useRef, useEffect, useContext } from 'react';
import { FieldErrorsContext } from './SecureForm';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  id: string;
  name: string;
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

export default function CustomDropdown({
  id,
  name,
  label,
  options,
  value,
  onChange,
  placeholder = "Sélectionnez une option",
  required = false,
  className = "",
  error
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    options.find(option => option.value === value) || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fieldErrors = useContext(FieldErrorsContext);
  const fieldError = error || fieldErrors[name];

  useEffect(() => {
    const option = options.find(option => option.value === value);
    setSelectedOption(option || null);
  }, [value, options]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <label htmlFor={id} className="block text-gray-300 font-medium mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      
      {/* Input hidden pour envoyer la valeur dans le FormData */}
      <input
        type="hidden"
        name={name}
        value={value}
      />
      
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className={`w-full bg-gray-800 border text-gray-100 rounded-lg px-4 py-3 text-left focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 hover:bg-gray-700 hover:border-gray-500 ${
            fieldError ? 'border-red-500' : 'border-gray-600'
          } ${
            isOpen ? 'ring-2 ring-primary-500 border-primary-500' : ''
          }`}
        >
          <span className={`${selectedOption ? 'text-white' : 'text-gray-400'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-[9999] w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-xl overflow-hidden">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors duration-150 flex items-center justify-between ${
                    selectedOption?.value === option.value
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'text-gray-300'
                  }`}
                >
                  <span>{option.label}</span>
                  {selectedOption?.value === option.value && (
                    <svg
                      className="w-4 h-4 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {fieldError && (
        <p className="mt-2 text-sm text-red-400 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {fieldError}
        </p>
      )}
    </div>
  );
}
