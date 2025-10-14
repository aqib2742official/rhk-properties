import React from "react";

export type StatusType = "active" | "inactive" | "pending" | "approved" | "rejected";

interface StatusBadgeProps {
  status: boolean | StatusType;
  activeLabel?: string;
  inactiveLabel?: string;
  size?: "sm" | "md";
}

/**
 * StatusBadge Component
 * 
 * A reusable badge component for displaying status states.
 * Supports boolean status (active/inactive) or string-based custom statuses.
 * 
 * @example
 * // Boolean status
 * <StatusBadge status={true} />
 * <StatusBadge status={false} />
 * 
 * // Custom labels
 * <StatusBadge status={true} activeLabel="Enabled" inactiveLabel="Disabled" />
 * 
 * // String status
 * <StatusBadge status="pending" />
 * <StatusBadge status="approved" />
 */
const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  activeLabel = "Active",
  inactiveLabel = "Inactive",
  size = "sm",
}) => {
  // Determine if status is boolean or string
  const isBoolean = typeof status === "boolean";
  
  // Get status type
  let statusType: StatusType;
  if (isBoolean) {
    statusType = status ? "active" : "inactive";
  } else {
    statusType = status;
  }

  // Get label
  let label: string;
  if (isBoolean) {
    label = status ? activeLabel : inactiveLabel;
  } else {
    label = statusType.charAt(0).toUpperCase() + statusType.slice(1);
  }

  // Define status styles
  const statusStyles: Record<StatusType, string> = {
    active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    inactive: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    approved: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    rejected: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
  };

  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full font-medium";
  const colorClass = statusStyles[statusType];
  const sizeClass = sizeStyles[size];

  return (
    <span className={`${baseStyles} ${sizeClass} ${colorClass}`}>
      {label}
    </span>
  );
};

export default StatusBadge;

