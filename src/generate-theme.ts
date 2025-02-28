import { Theme, ThemeConfig } from './types'

/**
 * Generates a complete VS Code theme from provided configuration
 * @param config Theme configuration
 * @returns Complete VS Code theme
 */
export function generateTheme(config: ThemeConfig): Theme {
  const {
    name,
    type,
    colors,
    tokenColors,
    semanticHighlighting,
    semanticTokenColors
  } = config

  return {
    name,
    type,
    semanticHighlighting,
    semanticTokenColors,
    tokenColors,
    colors
  }
}
