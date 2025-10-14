import React from "react";
import { AlertVariant, ALERT_VARIANTS } from "@/components/atoms/alert/alert.types";

interface AlertProps {
  variant?: AlertVariant;
  message: string;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  variant = ALERT_VARIANTS.INFO,
  message,
  onClose,
  className = "",
}) => {
  const variantStyles = {
    [ALERT_VARIANTS.ERROR]: "text-red-700 bg-red-100 dark:bg-red-900/20 dark:text-red-400",
    [ALERT_VARIANTS.SUCCESS]:
      "text-green-700 bg-green-100 dark:bg-green-900/20 dark:text-green-400",
    [ALERT_VARIANTS.WARNING]:
      "text-yellow-700 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400",
    [ALERT_VARIANTS.INFO]: "text-blue-700 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400",
  };

  const icons = {
    [ALERT_VARIANTS.ERROR]: (
      <svg
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    ),
    [ALERT_VARIANTS.SUCCESS]: (
      <svg
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    [ALERT_VARIANTS.WARNING]: (
      <svg
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    [ALERT_VARIANTS.INFO]: (
      <svg
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`flex items-start p-4 mb-4 text-sm rounded-lg ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 mr-3">{icons[variant]}</div>
      <div className="flex-1">{message}</div>
      {onClose && (
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 items-center justify-center hover:bg-opacity-20"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
