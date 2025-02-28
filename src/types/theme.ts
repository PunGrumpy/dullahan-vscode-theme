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
