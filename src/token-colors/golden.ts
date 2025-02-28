import { TokenColor } from '@/src/types'

export const goldenTokenColors: TokenColor[] = [
  {
    name: 'unison punctuation',
    scope:
      'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
    settings: {
      foreground: '#ffb000'
    }
  },
  {
    name: 'haskell variable generic-type',
    scope: 'variable.other.generic-type.haskell',
    settings: {
      foreground: '#e6583e'
    }
  },
  {
    name: 'haskell storage type',
    scope: 'storage.type.haskell',
    settings: {
      foreground: '#fcb065'
    }
  },
  {
    name: 'support.variable.magic.python',
    scope: 'support.variable.magic.python',
    settings: {
      foreground: '#ffb000'
    }
  },
  {
    name: 'punctuation.separator.parameters.python',
    scope:
      'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
    settings: {
      foreground: '#d1d1d1'
    }
  },
  {
    name: 'variable.parameter.function.language.special.self.python',
    scope: 'variable.parameter.function.language.special.self.python',
    settings: {
      foreground: '#d1d1d1'
    }
  },
  {
    name: 'Comments',
    scope: 'comment, punctuation.definition.comment',
    settings: {
      fontStyle: 'italic',
      foreground: '#d7e4ff46'
    }
  },
  {
    name: 'Keywords',
    scope: 'keyword',
    settings: {
      foreground: '#e6583e'
    }
  },
  {
    name: 'Strings',
    scope: 'string',
    settings: {
      foreground: '#ba5aff'
    }
  },
  {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'meta.require',
      'support.function.any-method',
      'variable.function'
    ],
    settings: {
      foreground: '#5ac8ff'
    }
  },
  {
    name: 'Variables',
    scope: 'variable',
    settings: {
      foreground: '#ffb000'
    }
  },
  {
    name: 'Constants',
    scope: 'constant',
    settings: {
      foreground: '#fcb065'
    }
  },
  {
    name: 'Tags',
    scope: 'entity.name.tag',
    settings: {
      foreground: '#ffb000'
    }
  }
]
