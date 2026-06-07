# Free Resources Data Model

The resources page curates high-quality, practical tools and support info for rural users.

## Scope & Purpose 
- Prevent link-rot and low-quality spam by keeping resources hard-coded in structured TS.
- Sort resources strictly into logical, user-centric categories.
- Enhance UI rendering speed (no database call).

## Model
```typescript
type ResourceType = 'official' | 'extension' | 'nonprofit' | 'local';

interface Resource {
  title: string;          // Concise, clear title
  url: string;            // Must be https://
  description: string;    // Brief "why this helps" (avoid marketing fluff)
  category: string;       // Broad grouping (e.g. "Getting Started", "Funding")
  bestFor: string;        // Quick use-case badge text (e.g. "Finding grants quickly")
  type: ResourceType;     // Controls the badge color/icon
}
```

## Maintenance Rules
1. Never scrape endpoints to populate this list. Only add manually verified high-value references.
2. Ensure links remain completely free for the end user to utilize.
3. Sort items inside `resource-data.ts` in order of typical priority, so they render nicely top-to-bottom.
