/**
 * `cn` — the one class-name composer.
 *
 * `clsx` resolves conditional/array/object class inputs; `tailwind-merge` then
 * collapses conflicting Tailwind utilities so the LAST wins (a caller's
 * `bg-background` overrides a component's default `bg-popover`). Every component
 * here merges through this single function.
 *
 * Vendored rather than imported from @hanzo/ui: this package exists so a Svelte
 * app does not pull in a React component library, and depending back on it for
 * three lines would undo that.
 */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
