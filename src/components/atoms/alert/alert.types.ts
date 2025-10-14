/**
 * Alert Component Types and Constants
 */

export const ALERT_VARIANTS = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
} as const;

// Type for alert variants
export type AlertVariant = typeof ALERT_VARIANTS[keyof typeof ALERT_VARIANTS];

// Export individual variants for convenience
export const { ERROR, SUCCESS, WARNING, INFO } = ALERT_VARIANTS;

