import { goldenPalette as p } from '../palette'
import { SemanticTokenColors } from '@/src/types'

export const goldenSemanticColors: SemanticTokenColors = {
  enumMember: { foreground: p.synConstant },
  'variable.constant': { foreground: p.synConstant },
  'variable.defaultLibrary': { foreground: p.synType },
  'property.declaration': { foreground: p.synProperty },
  'parameter.declaration': { foreground: p.synVariable }
}
