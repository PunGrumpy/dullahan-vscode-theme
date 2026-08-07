/**
 * Type definitions for VS Code themes
 */

// Token color settings interface
export interface TokenColorSettings {
  foreground?: string
  background?: string
  fontStyle?: string
}

// Token color interface
export interface TokenColor {
  name?: string
  scope: string | string[]
  settings: TokenColorSettings
}

// Semantic token color interface
export interface SemanticTokenColor {
  foreground?: string
  fontStyle?: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

// Color definitions interface (UI colors)
export interface ColorDefinitions {
  [key: string]: string
}

// Semantic token colors interface
export interface SemanticTokenColors {
  [key: string]: string | SemanticTokenColor
}

/**
 * Role-based color palette — the single source of truth for a theme variant.
 *
 * UI, token, and semantic color maps are all derived from these roles, so a
 * given meaning (an error, an added line, a string literal) resolves to exactly
 * one hex value everywhere it appears. Change a role here and it propagates.
 */
export interface Palette {
  // Surfaces, from furthest-back to furthest-front.
  bg: string // editor / primary canvas
  bgElevated: string // sidebar, panels, tabs (matches bg when the design is seamless)
  bgOverlay: string // menus, dropdowns, inputs
  bgFloating: string // hover widgets, suggest, notifications
  bgSelection: string // text/selection fills

  // Foreground text ramp, from loudest to quietest.
  fg: string // editor text
  fgMuted: string // secondary UI text
  fgSubtle: string // tertiary labels, inactive
  fgFaint: string // line numbers, disabled

  border: string // structural separators

  // Brand accent and its on-color (text/icon drawn on top of a filled accent).
  accent: string
  accentContrast: string

  // Syntax spectrum. Each role is one hue with one meaning across all languages.
  synKeyword: string
  synString: string
  synFunction: string
  synVariable: string
  synConstant: string
  synType: string
  synProperty: string
  synComment: string
  synPunctuation: string

  // Feedback / status. One hex per meaning, shared by diagnostics, git, testing,
  // gutters, minimap, and notifications.
  error: string
  warning: string
  info: string
  success: string
  conflict: string

  // Diff & merge tints (semi-transparent overlays layered on the canvas).
  diffAdded: string
  diffRemoved: string

  // The 8 ANSI terminal hues (bright variants are derived where sensible).
  ansiBlack: string
  ansiRed: string
  ansiGreen: string
  ansiYellow: string
  ansiBlue: string
  ansiMagenta: string
  ansiCyan: string
  ansiWhite: string
}

// Theme configuration for generating a theme
export interface ThemeConfig {
  name: string
  type: 'light' | 'dark' | 'high-contrast'
  colors: ColorDefinitions
  tokenColors: TokenColor[]
  semanticHighlighting: boolean
  semanticTokenColors: SemanticTokenColors
}

// Complete theme object
export interface Theme {
  name: string
  type: 'light' | 'dark' | 'high-contrast'
  colors: ColorDefinitions
  tokenColors: TokenColor[]
  semanticHighlighting: boolean
  semanticTokenColors: SemanticTokenColors
}
