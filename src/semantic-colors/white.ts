import { whitePalette as p } from '../palette'
import { SemanticTokenColors } from '@/src/types'

export const whiteSemanticColors: SemanticTokenColors = {
  enumMember: { foreground: p.synFunction },
  'variable.constant': { foreground: p.synFunction },
  'variable.defaultLibrary': { foreground: p.synFunction },
  'property.declaration': { foreground: p.synProperty },
  'parameter.declaration': { foreground: p.synVariable }
}
