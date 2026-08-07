import { Palette } from '@/src/types'

/**
 * Dark Dullahan — the anchor palette.
 *
 * A near-black `#101010` canvas carrying a cool, vivid syntax spectrum that
 * arcs magenta → purple → blue → cyan → mint. That arc is the theme's
 * signature and is preserved here; the retune only harmonizes each hue to a
 * shared brightness so they read as one family on the dark ground.
 *
 * Feedback (error/warning/info/success) is a theme-independent language: the
 * same four signals appear in every variant so a red always means the same
 * thing. `info` is cyan, never white — white reads as "no signal" against a
 * cool palette. Diff tints stay deliberately aesthetic (cyan added / purple
 * removed) rather than green/red, which is a distinct axis from git status.
 */
export const darkPalette: Palette = {
  // Surfaces — sidebar and panels intentionally match the editor for a
  // seamless, borderless shell; overlays and floating widgets step up in
  // lightness so shadows can separate them.
  bg: '#101010',
  bgElevated: '#101010',
  bgOverlay: '#1b1b1b',
  bgFloating: '#242424',
  bgSelection: '#2f2f2f',

  // Foreground ramp.
  fg: '#d1d1d1',
  fgMuted: '#cccccc',
  fgSubtle: '#aaaaaa',
  fgFaint: '#7e7e7e',

  border: '#2a2a2a',

  // Brand accent: Dullahan's monochrome white. Interactive fills draw black on
  // white — the headless-horseman contrast the whole identity is built on.
  accent: '#ffffff',
  accentContrast: '#101010',

  // Syntax spectrum — one hue per role, tuned to a common brightness.
  synKeyword: '#f56fd6', // magenta
  synString: '#b07cff', // purple
  synVariable: '#6d8bff', // periwinkle blue
  synFunction: '#5ac8ff', // sky cyan
  synProperty: '#8fd6ff', // soft cyan (quieter than function)
  synType: '#4fe0c0', // teal (sits between cyan and mint)
  synConstant: '#5effc3', // mint
  synComment: '#d7e4ff', // faint blue-white (dimmed via alpha at use site)
  synPunctuation: '#d1d1d1',

  // Feedback — one value per meaning, shared across variants.
  error: '#f2555a',
  warning: '#f0a742',
  info: '#5ac8ff',
  success: '#4bd66a',
  conflict: '#c98bff',

  // Diff tints (aesthetic cyan/purple, layered translucent on the canvas).
  diffAdded: '#5ac8ff',
  diffRemoved: '#b07cff',

  // ANSI terminal — conventional mapping so `git`, `ls`, and friends render
  // correctly. (The previous palette mapped red/green/yellow to purples/blues,
  // so terminal output was miscolored.)
  ansiBlack: '#1b1b1b',
  ansiRed: '#f2555a',
  ansiGreen: '#4bd66a',
  ansiYellow: '#f0a742',
  ansiBlue: '#6d8bff',
  ansiMagenta: '#f56fd6',
  ansiCyan: '#5ac8ff',
  ansiWhite: '#cccccc'
}
