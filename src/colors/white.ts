import { whitePalette } from '../palette'
import { ColorDefinitions } from '@/src/types'

import { buildLightShellColors } from './build-light-shell'

/**
 * White Dullahan UI colors.
 * Derives from {@link whitePalette} via the light-shell factory. Where the dark
 * variants draw translucent washes in white and hide borders, the light shell
 * inverts both — see {@link buildLightShellColors}.
 */
export const whiteColors: ColorDefinitions = buildLightShellColors(whitePalette)
