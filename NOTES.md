# Notes

## mousedown vs click — Event Order
Order of browser events on a click:
```
mousedown → mouseup → click
```
Using `mousedown` for the outside-close listener means it fires before any `click` handler runs, so there is no overlap between the document listener and the bell's `onClick`. With `click`, both the document listener and bell `onClick` fire in the same event cycle which can cause jitter.

---

## Link vs router.push

| | `Link` | `router.push` |
|---|---|---|
| Renders as | `<a>` tag | No DOM element |
| Prefetch | Yes (automatic) | No |
| Right-click → new tab | Yes | No |
| Use when | Simple navigation | Navigate after logic, or to pass data as state |

Use `Link` for straightforward navigation. Use `router.push` when you need to run logic before navigating or pass the already-fetched data to the next page to skip a redundant API call.

---

## Prefetching (Next.js Link)
`Link` prefetches the page's **JavaScript bundle** in the background when it appears in the viewport. It does NOT prefetch data.

```
Without prefetch:  click → download JS → mount page → fetch data
With prefetch:     click → mount page  → fetch data
```

Prefetch just removes the JS download step. Data fetch always starts only after the user clicks.

---

## Separation of Concerns / Single Responsibility Principle (SRP)
Each component should have one clear reason to change.

- **Page** — owns state and logic only
- **UI components** — own rendering and their own local UI state only

In practice: if tag chip design changes, touch only `TagChips`. If toolbar layout changes, touch only `PostToolbar`. The page never changes for UI reasons, only for logic reasons.

Applied in `create-post`:
- `CreatePostPage` — state and logic
- `TagChips` — rendering and removing tags
- `PostToolbar` — toolbar UI and open/close toggle state
- `EmojiPicker` / `TagPicker` — their own dropdown UI
