/**
 * Low-level color helpers shared by every palette.
 *
 * Keeping transparency and lightening in functions (rather than hand-written
 * 8-digit hex) makes intent legible: `alpha(fg, 0.06)` and `mix(red, white, 0.3)`
 * say what they mean, and every derived value is computed the same way — so the
 * palette stays internally consistent instead of drifting one nudged hex at a time.
 */

/**
 * Appends an 8-bit alpha channel to a hex color.
 * VS Code bakes transparency into the value as `#RRGGBBAA`.
 *
 * @param hex   A `#RRGGBB` (or `#RRGGBBAA`) color; any existing alpha is replaced.
 * @param value Opacity from 0 (transparent) to 1 (opaque).
 */
export function alpha(hex: string, value: number): string {
  const base = hex.slice(0, 7)
  const clamped = Math.max(0, Math.min(1, value))
  const channel = Math.round(clamped * 255)
    .toString(16)
    .padStart(2, '0')
  return `${base}${channel}`
}

/**
 * Linearly interpolates between two hex colors in sRGB.
 * Used to derive the "bright" ANSI variants from their base hues so the whole
 * terminal set stays in tune instead of being eyeballed one swatch at a time.
 *
 * @param from   Base `#RRGGBB` color.
 * @param to     Target `#RRGGBB` color.
 * @param weight How far toward `to`, from 0 (all `from`) to 1 (all `to`).
 */
export function mix(from: string, to: string, weight: number): string {
  const w = Math.max(0, Math.min(1, weight))
  const a = hexToRgb(from)
  const b = hexToRgb(to)
  const channel = (x: number, y: number) =>
    Math.round(x + (y - x) * w)
      .toString(16)
      .padStart(2, '0')
  return `#${channel(a.r, b.r)}${channel(a.g, b.g)}${channel(a.b, b.b)}`
}

/** Lightens a color toward white by `amount` (0–1). */
export const lighten = (hex: string, amount: number) =>
  mix(hex, '#ffffff', amount)

/** Darkens a color toward black by `amount` (0–1). */
export const darken = (hex: string, amount: number) =>
  mix(hex, '#000000', amount)

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.slice(1, 7)
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16)
  }
}
