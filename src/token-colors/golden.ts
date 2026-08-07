import { alpha, goldenPalette as p } from '../palette'
import { TokenColor } from '@/src/types'

/**
 * Golden Dullahan syntax tokens.
 * Structurally identical to the Dark token set — same scopes, same roles — so
 * the two variants highlight code the same way and differ only in the warm hues
 * defined by {@link goldenPalette}.
 */
export const goldenTokenColors: TokenColor[] = [
  {
    name: 'unison punctuation',
    scope:
      'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
    settings: { foreground: p.synVariable }
  },
  {
    name: 'haskell variable generic-type',
    scope: 'variable.other.generic-type.haskell',
    settings: { foreground: p.synKeyword }
  },
  {
    name: 'haskell storage type',
    scope: 'storage.type.haskell',
    settings: { foreground: p.synConstant }
  },
  {
    name: 'support.variable.magic.python',
    scope: 'support.variable.magic.python',
    settings: { foreground: p.synVariable }
  },
  {
    name: 'punctuation.separator.parameters.python',
    scope:
      'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
    settings: { foreground: p.synPunctuation }
  },
  {
    name: 'variable.parameter.function.language.special.self.python',
    scope: 'variable.parameter.function.language.special.self.python',
    settings: { foreground: p.synPunctuation }
  },
  {
    name: 'Comments',
    scope: 'comment, punctuation.definition.comment',
    settings: { fontStyle: 'italic', foreground: alpha(p.synComment, 0.27) }
  },
  {
    name: 'Keywords',
    scope: 'keyword',
    settings: { foreground: p.synKeyword }
  },
  {
    name: 'Storage & modifiers',
    scope: 'storage, storage.type, keyword.operator',
    settings: { foreground: p.synKeyword }
  },
  {
    name: 'Types',
    scope:
      'entity.name.type, entity.other.inherited-class, support.type, support.class',
    settings: { foreground: p.synType }
  },
  {
    name: 'Strings',
    scope: 'string',
    settings: { foreground: p.synString }
  },
  {
    name: 'Numbers',
    scope: 'constant.numeric, constant.language',
    settings: { foreground: p.synConstant }
  },
  {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'meta.require',
      'support.function.any-method',
      'variable.function'
    ],
    settings: { foreground: p.synFunction }
  },
  {
    name: 'Variables',
    scope: 'variable',
    settings: { foreground: p.synVariable }
  },
  {
    name: 'Object properties',
    scope:
      'variable.other.property, variable.other.object.property, meta.object-literal.key',
    settings: { foreground: p.synProperty }
  },
  {
    name: 'Constants',
    scope: 'constant',
    settings: { foreground: p.synConstant }
  },
  {
    name: 'Tags',
    scope: 'entity.name.tag',
    settings: { foreground: p.synVariable }
  },
  {
    name: 'Attributes',
    scope: 'entity.other.attribute-name',
    settings: { foreground: p.synConstant }
  },
  {
    name: 'Invalid',
    scope: 'invalid, invalid.illegal',
    settings: { foreground: p.error }
  }
]
