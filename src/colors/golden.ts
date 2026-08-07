import { goldenPalette } from '../palette'
import { ColorDefinitions } from '@/src/types'

import { buildDarkShellColors } from './build-dark-shell'

/**
 * Golden Dullahan UI colors.
 * Shares the dark-shell factory with {@link darkColors}; the gold accent and
 * warm spectrum come entirely from {@link goldenPalette}, so the two variants
 * cannot drift apart structurally — only their palette roles differ.
 */
export const goldenColors: ColorDefinitions =
  buildDarkShellColors(goldenPalette)
