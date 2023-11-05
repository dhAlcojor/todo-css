# ADRs (Architectural Decision Records)

TOC:

- [ADR-001: Use TailWindCSS](#adr-001-use-tailwindcss)
- [ADR-002: Use pnpm](#adr-002-use-pnpm)

## ADR-001: Use TailWindCSS

### Status

Accepted

### Context

I want to use the same CSS styles for all the apps in this project. I could use a CSS framework like Bootstrap, but I want to learn TailWindCSS, so I'm going to use it for this project.

### Decision

Use TailWindCSS for all the apps in this project.

### Consequences

- I will have to learn TailWindCSS
- I will have to configure TailWindCSS for all the apps
- I will have to create a common CSS repo for all the apps (this one)
- I will have to create a storybook to show the styles

## ADR-002: Use pnpm

### Status

Accepted

### Context

I want to use a different package manager, I always use npm and I want to try something different. I wanted to use Yarn, but WebStorm doesn't seem to be compatible with versions 3 or 4, so I'll try pnpm.

### Decision

Use pnpm for all the apps in this project.

### Consequences

- I will have to learn pnpm
