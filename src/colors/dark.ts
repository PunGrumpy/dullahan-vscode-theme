import { darkPalette } from '../palette'
import { ColorDefinitions } from '@/src/types'

import { buildDarkShellColors } from './build-dark-shell'

/**
 * Dark Dullahan UI colors.
 * Every value derives from {@link darkPalette} via the shared dark-shell factory,
 * so the theme has a single source of truth for each semantic role.
 */
export const darkColors: ColorDefinitions = buildDarkShellColors(darkPalette)
