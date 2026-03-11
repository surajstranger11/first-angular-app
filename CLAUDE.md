# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (http://localhost:4200)
npm start

# Build for production
npm run build

# Run tests (Karma + Jasmine, opens browser)
npm test

# Build in watch mode
npm run watch

# Run Angular CLI directly
npx ng <command>

# Generate a component/directive/pipe
npx ng generate component <name>
npx ng generate directive <name>
npx ng generate pipe <name>
```

## Architecture

This is an Angular 19 training/learning project using standalone components (no NgModules).

**Key conventions:**
- Components use `standalone: true` and declare their own `imports` array
- State is managed with Angular signals (`signal()` from `@angular/core`)
- The app uses `provideRouter` / `provideZoneChangeDetection` in `src/app/app.config.ts` — no AppModule

**Component structure:**

- `src/app/` — Root `AppComponent`; imports `HeaderComponent` and `UserComponent`
- `src/Header/` — `HeaderComponent` (note: capital H directory, non-standard)
- `src/user/` — `UserComponent` with signal-based state; reads from `dummy-users.ts` data
- `src/custom.directive.ts` — Skeleton `CustomDirective` (`[appCustom]` selector)
- `src/custom.pipe.ts` — Skeleton `CustomPipe` (`custom` pipe name)

**Data:**
- `src/user/dummy-users.ts` exports `DUMMY_USERS` array (6 users with `id`, `name`, `avatar`)
- User avatar images are served from `public/users/` (e.g., `user-1.jpg`)
- `UserComponent.imagePath` builds the path as `'./users/' + user().avatar`

**Routing:** `src/app/app.routes.ts` — currently empty (`routes: Routes = []`)
