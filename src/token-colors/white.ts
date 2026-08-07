import { whitePalette as p } from '../palette'
import { TokenColor } from '@/src/types'

/**
 * White Dullahan syntax tokens.
 * Keeps the established Xcode-light scope mapping, now addressed through
 * {@link whitePalette} roles so the light variant shares one source of truth
 * with the dark ones.
 */
export const whiteTokenColors: TokenColor[] = [
  {
    scope: ['comment', 'punctuation.definition.comment'],
    settings: { foreground: p.synComment, fontStyle: 'italic' }
  },
  {
    scope: [
      'string',
      'punctuation.definition.string',
      'punctuation.support.type.property-name.begin.json',
      'punctuation.support.type.property-name.end.json'
    ],
    settings: { foreground: p.synString }
  },
  {
    scope: ['constant.numeric'],
    settings: { foreground: p.synConstant }
  },
  {
    scope: ['constant.other.placeholder', 'constant.character.escape'],
    settings: { foreground: p.synPunctuation }
  },
  {
    scope: [
      'keyword',
      'keyword.operator.new',
      'keyword.operator.wordlike',
      'keyword.operator.logical.and',
      'storage',
      'variable.language',
      'constant.language'
    ],
    settings: { foreground: p.synKeyword, fontStyle: 'bold' }
  },
  {
    scope: ['keyword.control.directive', 'punctuation.definition.directive'],
    settings: { foreground: p.warning, fontStyle: '' }
  },
  {
    scope: ['variable.parameter'],
    settings: { foreground: p.synVariable }
  },
  {
    scope: [
      'entity.name.type',
      'entity.other.inherited-class',
      'storage.type.haskell'
    ],
    settings: { foreground: p.synProperty }
  },
  {
    scope: [
      'keyword.type.cs',
      'storage.type.numeric.go',
      'storage.type.byte.go',
      'storage.type.boolean.go',
      'storage.type.string.go',
      'storage.type.uintptr.go',
      'storage.type.error.go',
      'storage.type.rune.go'
    ],
    settings: { foreground: p.conflict, fontStyle: '' }
  },
  {
    scope: ['entity.name.function', 'support.function'],
    settings: { foreground: p.synFunction }
  },
  {
    scope: ['support.function.builtin'],
    settings: { foreground: p.diffRemoved }
  },
  {
    scope: [
      'variable.other.property',
      'variable.other.object.property',
      'entity.name.variable.field'
    ],
    settings: { foreground: p.synFunction }
  },
  {
    scope: ['entity.name.tag'],
    settings: { foreground: p.conflict }
  },
  {
    scope: [
      'entity.other.attribute-name',
      'support.type.property-name.css',
      'support.type.property-name.media.css'
    ],
    settings: { foreground: p.diffRemoved }
  },
  {
    scope: ['invalid', 'invalid.illegal'],
    settings: { foreground: p.error }
  }
]
