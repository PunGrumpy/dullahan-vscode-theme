import * as fs from 'fs'
import * as path from 'path'
import { generateTheme } from './generate-theme'

import { darkColors, goldenColors, whiteColors } from './colors'
import {
  darkTokenColors,
  goldenTokenColors,
  whiteTokenColors
} from './token-colors'
import {
  darkSemanticColors,
  goldenSemanticColors,
  whiteSemanticColors
} from './semantic-colors'

// Ensure themes directory exists
const themesDir = path.join(__dirname, '..', 'themes')
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir)
}

// Generate Dark Dullahan theme
const darkTheme = generateTheme({
  name: 'Dark Dullahan',
  type: 'dark',
  colors: darkColors,
  tokenColors: darkTokenColors,
  semanticHighlighting: true,
  semanticTokenColors: darkSemanticColors
})

// Generate Golden Dullahan theme
const goldenTheme = generateTheme({
  name: 'Golden Dullahan',
  type: 'dark',
  colors: goldenColors,
  tokenColors: goldenTokenColors,
  semanticHighlighting: true,
  semanticTokenColors: goldenSemanticColors
})

// Generate White Dullahan theme
const whiteTheme = generateTheme({
  name: 'White Dullahan',
  type: 'light',
  colors: whiteColors,
  tokenColors: whiteTokenColors,
  semanticHighlighting: true,
  semanticTokenColors: whiteSemanticColors
})

// Write themes to files
fs.writeFileSync(
  path.join(themesDir, 'dark-dullahan.json'),
  JSON.stringify(darkTheme, null, 2)
)

fs.writeFileSync(
  path.join(themesDir, 'golden-dullahan.json'),
  JSON.stringify(goldenTheme, null, 2)
)

fs.writeFileSync(
  path.join(themesDir, 'white-dullahan.json'),
  JSON.stringify(whiteTheme, null, 2)
)

console.log('✅ Themes generated successfully!')
