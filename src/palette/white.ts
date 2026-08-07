import { Palette } from '@/src/types'

/**
 * White Dullahan — the light variant.
 *
 * A light theme is not a dark theme with inverted numbers: feedback and syntax
 * colors must be *darkened* to hold contrast against a near-white ground, so the
 * hexes here are the low-lightness cousins of the dark signals rather than the
 * same values. The syntax roles keep the theme's established Xcode-light
 * character (teal comments, red strings, magenta keywords) but are now addressed
 * by role so the UI derives from the same source of truth as the dark variants.
 *
 * The `bg*` steps run the opposite direction from dark — surfaces get *lighter*
 * toward the front, and the accent is a vivid blue with white on top.
 */
export const whitePalette: Palette = {
  // Surfaces, back → front (chrome slightly grey, editor pure-ish white).
  bg: '#ffffff',
  bgElevated: '#f5f5f5',
  bgOverlay: '#ececec',
  bgFloating: '#f5f5f5',
  bgSelection: '#b3d7ff',

  // Foreground ramp (dark ink → faint grey).
  fg: '#282828',
  fgMuted: '#565456',
  fgSubtle: '#6b6b6b',
  fgFaint: '#a6a6a6',

  border: '#d9d7d5',

  // Vivid blue accent, white text on fills.
  accent: '#3c93fd',
  accentContrast: '#ffffff',

  // Syntax — classic light values, darkened enough to read on white.
  synKeyword: '#ad3da4', // magenta
  synString: '#d12f1b', // red
  synVariable: '#057cb0', // blue
  synFunction: '#3e8087', // teal
  synProperty: '#23575c', // deep teal
  synType: '#23575c', // deep teal
  synConstant: '#272ad8', // indigo (numerics/constants)
  synComment: '#266f6f', // teal
  synPunctuation: '#282828',

  // Feedback — darkened for light-background legibility. Same *meanings* as the
  // dark variants, different lightness so contrast holds.
  error: '#c41a16',
  warning: '#b06a00',
  info: '#0a68c4',
  success: '#007400',
  conflict: '#6a3ac4',

  diffAdded: '#0a68c4',
  diffRemoved: '#8854d3',

  // ANSI — the established light terminal set, corrected to conventional hues.
  ansiBlack: '#000000',
  ansiRed: '#c41a16',
  ansiGreen: '#007400',
  ansiYellow: '#b06a00',
  ansiBlue: '#272ad8',
  ansiMagenta: '#aa0d91',
  ansiCyan: '#3f6e74',
  ansiWhite: '#565456'
}
