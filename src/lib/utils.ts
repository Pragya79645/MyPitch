// Utility function for className merging (like clsx or tailwind-merge)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
