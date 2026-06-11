# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies (required before first run)
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview production build
npm run lint     # run ESLint
```

No test suite is configured.

## Architecture

This is a single-page React app (Vite + React 19). All application logic lives in one file:

- **`src/App.jsx`** — the entire app: state management, filtering logic, form handling, and rendered UI. No separate components, no routing, no global state library.
- **`src/App.css`** / **`src/index.css`** — all styles.

### Data model

Transactions are held in React state (not persisted). Each transaction has:

```js
{ id, description, amount, type, category, date }
// type: "income" | "expense"
// category: "food" | "housing" | "utilities" | "transport" | "entertainment" | "salary" | "other"
// amount: stored as a string (raw input value) — note: arithmetic on it will coerce to number via JS
```

### Known issues (intentional — course starter)

- `amount` is stored as a string, so `reduce` over amounts uses implicit JS coercion rather than `parseFloat`.
- Summary cards show raw totals without proper number formatting.
- The transaction list has no delete capability.
- UI styling is minimal/rough by design.
