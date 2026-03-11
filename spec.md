# Application Specification

## Overview

A training Angular 19 application that demonstrates core Angular concepts including standalone components, signals, data binding, directives, and pipes.

---

## Features

### `app-user` — User Display

| Behaviour | Detail |
|-----------|--------|
| Initial load | Displays a randomly selected user from `DUMMY_USERS` |
| User card | Shows avatar image and name |
| Interaction | Clicking the button selects the next user in the list |
| Avatar path | Resolved as `./users/<avatar>` from `public/users/` |

### `app-header` — Header

Renders a static header at the top of the page.

### `app-root` — Root Layout

Composes `HeaderComponent` and `UserComponent` in the main view and includes a `<router-outlet>` for future routed views.

---

## Data Model

### User

```ts
{
  id: string;      // e.g. 'u1'
  name: string;    // e.g. 'Jasmine Washington'
  avatar: string;  // e.g. 'user-1.jpg'
}
```

### Dummy Users (`src/user/dummy-users.ts`)

| ID | Name |
|----|------|
| u1 | Jasmine Washington |
| u2 | Emily Thompson |
| u3 | Marcus Johnson |
| u4 | David Miller |
| u5 | Priya Patel |
| u6 | Arjun Singh |

---

## Technical Constraints

- **Framework:** Angular 19, standalone components only — no NgModules
- **State:** Managed with Angular signals (`signal()`)
- **Routing:** Configured via `provideRouter` but no routes defined yet
- **Directive:** `CustomDirective` with selector `[appCustom]` — scaffolded, not yet implemented
- **Pipe:** `CustomPipe` with name `custom` — scaffolded, not yet implemented

---

## Known Issues & Planned Work

- [ ] `onSelectUser()` uses `randomIndex + 1` which can exceed array bounds
- [ ] Implement `CustomDirective` with meaningful behavior
- [ ] Implement `CustomPipe` transform logic
- [ ] Define application routes in `src/app/app.routes.ts`
