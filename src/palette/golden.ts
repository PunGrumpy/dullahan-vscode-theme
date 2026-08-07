import { Palette } from '@/src/types'

/**
 * Golden Dullahan — the warm sibling.
 *
 * Same near-black shell as Dark, but the syntax spectrum swings warm: an
 * ember-red → amber → gold core, with sky cyan kept as the single cool
 * counterpoint for functions so code still has a focal contrast. The brand
 * accent is gold rather than white.
 *
 * Feedback colors are inherited wholesale from the shared language (identical
 * to Dark) — a warm theme must not blur "warning amber" into "this is just how
 * the theme looks." Keeping error/warning/info/success constant across variants
 * is what makes them trustworthy signals.
 */
export const goldenPalette: Palette = {
  bg: '#101010',
  bgElevated: '#101010',
  bgOverlay: '#1b1b1b',
  bgFloating: '#242424',
  bgSelection: '#2f2f2f',

  fg: '#d1d1d1',
  fgMuted: '#cccccc',
  fgSubtle: '#aaaaaa',
  fgFaint: '#7e7e7e',

  border: '#2a2a2a',

  // Gold accent; dark text on gold fills.
  accent: '#ffb000',
  accentContrast: '#101010',

  // Warm spectrum. Cyan for functions is the deliberate cool anchor.
  synKeyword: '#ff6a4d', // ember red-orange
  synString: '#b07cff', // purple (shared with Dark — strings stay cool/soft)
  synVariable: '#ffb000', // gold
  synFunction: '#5ac8ff', // sky cyan (cool focal point)
  synProperty: '#ffc766', // light amber
  synType: '#ffca7a', // sand
  synConstant: '#fcb065', // warm amber
  synComment: '#d7e4ff',
  synPunctuation: '#d1d1d1',

  // Shared feedback language (identical across variants).
  error: '#f2555a',
  warning: '#f0a742',
  info: '#5ac8ff',
  success: '#4bd66a',
  conflict: '#c98bff',

  diffAdded: '#5ac8ff',
  diffRemoved: '#ffb000',

  ansiBlack: '#1b1b1b',
  ansiRed: '#f2555a',
  ansiGreen: '#4bd66a',
  ansiYellow: '#ffb000',
  ansiBlue: '#6d8bff',
  ansiMagenta: '#ff6a4d',
  ansiCyan: '#5ac8ff',
  ansiWhite: '#cccccc'
}
