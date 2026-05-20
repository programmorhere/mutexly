/** RGB triplet — must stay in sync with --brand-rgb in app/globals.css */
export const BRAND_RGB = "109, 40, 217"

/** Build rgba() from brand token for SVG / inline styles */
export function brandAlpha(opacity: number): string {
  return `rgba(${BRAND_RGB}, ${opacity})`
}

/** SweetAlert / modal palette (dark violet surfaces) */
export const SWAL_THEME = {
  background: "#0c0a14",
  color: "#ede9fe",
  confirmButton: "#8b5cf6",
} as const
