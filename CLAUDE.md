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

This is a single-page React app (Vite + React 19). No routing, no global state library.

### Component tree

```
App
├── Summary          — displays income/expense/balance totals (computes them internally from transactions)
├── TransactionForm  — add-transaction form with its own local field state; calls onAdd(transaction) prop
└── TransactionList  — filterable transaction table with its own local filter state
```

- **`App.jsx`** — holds the `transactions` array in state and passes it down. The only cross-component action is `handleAdd`, passed to `TransactionForm` as `onAdd`.
- **`src/App.css`** / **`src/index.css`** — all styles.

### Data model

Transactions are held in React state (not persisted). Each transaction has:

```js
{ id, description, amount, type, category, date }
// type: "income" | "expense"
// category: "food" | "housing" | "utilities" | "transport" | "entertainment" | "salary" | "other"
// amount: number
```

The `categories` list is duplicated in `TransactionForm` and `TransactionList` — no shared constants file yet.

### Known issues (intentional — course starter)

- Summary cards show raw totals without proper number formatting.
- The transaction list has no delete capability.
- UI styling is minimal/rough by design.
