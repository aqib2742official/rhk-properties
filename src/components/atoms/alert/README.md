# Alert Component

A reusable alert component for displaying messages with different severity levels.

## Features

- ✅ Multiple variants (error, success, warning, info)
- ✅ Type-safe variant constants
- ✅ Icons for each variant
- ✅ Optional close button
- ✅ Dark mode support
- ✅ Customizable styling
- ✅ Accessible (ARIA roles)

## Usage

### Basic Usage

```tsx
import Alert from "@/components/ui/alert/Alert";
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

// Error alert
<Alert variant={ALERT_VARIANTS.ERROR} message="Invalid email or password" />

// Success alert
<Alert variant={ALERT_VARIANTS.SUCCESS} message="Account created successfully!" />

// Warning alert
<Alert variant={ALERT_VARIANTS.WARNING} message="Your session will expire soon" />

// Info alert
<Alert variant={ALERT_VARIANTS.INFO} message="New features available" />
```

### With Close Button

```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

const [error, setError] = useState("Something went wrong");

{error && (
  <Alert
    variant={ALERT_VARIANTS.ERROR}
    message={error}
    onClose={() => setError("")}
  />
)}
```

### Custom Styling

```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

<Alert
  variant={ALERT_VARIANTS.SUCCESS}
  message="Saved!"
  className="mb-8"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `AlertVariant` | `ALERT_VARIANTS.INFO` | Alert type/severity |
| `message` | `string` | Required | Message to display |
| `onClose` | `() => void` | `undefined` | Close button handler (optional) |
| `className` | `string` | `""` | Additional CSS classes |

## Constants

```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

ALERT_VARIANTS.ERROR    // "error"
ALERT_VARIANTS.SUCCESS  // "success"
ALERT_VARIANTS.WARNING  // "warning"
ALERT_VARIANTS.INFO     // "info"
```

## Variants

### Error (Red)
Used for validation errors, form errors, API errors
```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

<Alert variant={ALERT_VARIANTS.ERROR} message="Email already exists" />
```

### Success (Green)
Used for successful operations
```tsx
<Alert variant={ALERT_VARIANTS.SUCCESS} message="Profile updated successfully!" />
```

### Warning (Yellow)
Used for warnings that need attention
```tsx
<Alert variant={ALERT_VARIANTS.WARNING} message="Password expires in 3 days" />
```

### Info (Blue)
Used for informational messages
```tsx
<Alert variant={ALERT_VARIANTS.INFO} message="You have 5 new notifications" />
```

## Examples in Real Usage

### Form Validation
```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

const [error, setError] = useState("");

const handleSubmit = (e) => {
  if (!email) {
    setError("Email is required");
    return;
  }
  // ... rest of logic
};

return (
  <form>
    {error && (
      <Alert
        variant={ALERT_VARIANTS.ERROR}
        message={error}
        onClose={() => setError("")}
      />
    )}
    {/* form fields */}
  </form>
);
```

### Success Message After Action
```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

const [success, setSuccess] = useState("");

const handleSave = async () => {
  await saveData();
  setSuccess("Changes saved successfully!");
  
  // Auto-hide after 3 seconds
  setTimeout(() => setSuccess(""), 3000);
};

return (
  <>
    {success && (
      <Alert variant={ALERT_VARIANTS.SUCCESS} message={success} />
    )}
  </>
);
```

### Multiple Alerts
```tsx
import { ALERT_VARIANTS } from "@/components/ui/alert/alert.types";

{errors.map((error, index) => (
  <Alert
    key={index}
    variant={ALERT_VARIANTS.ERROR}
    message={error}
  />
))}
```

## Styling

The component uses Tailwind classes and supports dark mode:

- Light mode: Colored backgrounds with darker text
- Dark mode: Semi-transparent backgrounds with lighter text

## Accessibility

- Uses `role="alert"` for screen readers
- Close button has `aria-label="Close"`
- Keyboard accessible (close button)

## Future Enhancements

Potential additions:
- Auto-dismiss timer
- Animation on show/hide
- Multiple messages support
- Stacked alerts container
- Position variants (top, bottom, etc.)

