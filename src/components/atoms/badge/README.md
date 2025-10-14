# Badge Components

This directory contains badge components for displaying labels, statuses, and tags.

## 📦 Components

### Badge
A versatile badge component with multiple variants, colors, and sizes.

**Props:**
- `variant`: "light" | "solid"
- `size`: "sm" | "md"
- `color`: "primary" | "success" | "error" | "warning" | "info" | "light" | "dark"
- `startIcon`: React.ReactNode (optional)
- `endIcon`: React.ReactNode (optional)
- `children`: React.ReactNode (content)

**Example:**
```tsx
import { Badge } from "@/components/atoms";

<Badge color="success" variant="light">
  New Feature
</Badge>

<Badge color="error" variant="solid" startIcon={<AlertIcon />}>
  Error
</Badge>
```

---

### StatusBadge
A specialized badge component for displaying status states (active/inactive, enabled/disabled, etc.).

**Props:**
- `status`: boolean | StatusType - The status to display
- `activeLabel`: string (default: "Active") - Label for active state
- `inactiveLabel`: string (default: "Inactive") - Label for inactive state
- `size`: "sm" | "md" (default: "sm") - Badge size

**StatusType:** "active" | "inactive" | "pending" | "approved" | "rejected"

**Examples:**

#### Boolean Status
```tsx
import { StatusBadge } from "@/components/atoms";

// Shows "Active" in green
<StatusBadge status={true} />

// Shows "Inactive" in red
<StatusBadge status={false} />
```

#### Custom Labels
```tsx
// Shows "Enabled" or "Disabled"
<StatusBadge 
  status={isEnabled} 
  activeLabel="Enabled" 
  inactiveLabel="Disabled" 
/>

// Shows "Online" or "Offline"
<StatusBadge 
  status={user.isOnline} 
  activeLabel="Online" 
  inactiveLabel="Offline" 
/>
```

#### String-Based Status
```tsx
// Shows "Pending" in yellow
<StatusBadge status="pending" />

// Shows "Approved" in blue
<StatusBadge status="approved" />

// Shows "Rejected" in gray
<StatusBadge status="rejected" />
```

#### With Different Sizes
```tsx
<StatusBadge status={true} size="sm" />  // Small (default)
<StatusBadge status={true} size="md" />  // Medium
```

---

## 🎨 Status Colors

| Status    | Color  | Use Case                          |
|-----------|--------|-----------------------------------|
| Active    | Green  | Active users, enabled features    |
| Inactive  | Red    | Inactive users, disabled features |
| Pending   | Yellow | Awaiting approval, in progress    |
| Approved  | Blue   | Approved requests, verified       |
| Rejected  | Gray   | Declined requests, denied         |

---

## 🔧 Usage in Tables

```tsx
import { StatusBadge } from "@/components/atoms";

// In a table cell
<TableCell>
  <StatusBadge status={row.isActive} />
</TableCell>

// With custom labels
<TableCell>
  <StatusBadge 
    status={row.isEnabled} 
    activeLabel="Published" 
    inactiveLabel="Draft" 
  />
</TableCell>
```

---

## ✨ Benefits

- **Reusable**: Single component used across the entire application
- **Consistent**: Same styling and behavior everywhere
- **Flexible**: Supports boolean and string-based statuses
- **Customizable**: Custom labels for different contexts
- **Type-safe**: Full TypeScript support
- **Accessible**: Semantic HTML with proper ARIA labels
- **Dark mode**: Fully supports dark mode

---

## 📁 File Structure

```
badge/
├── Badge.tsx           # Generic badge component
├── StatusBadge.tsx     # Status-specific badge
├── index.ts            # Barrel export
└── README.md           # This file
```

