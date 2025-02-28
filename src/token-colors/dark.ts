import { TokenColor } from '@/src/types'

export const darkTokenColors: TokenColor[] = [
  {
    name: 'unison punctuation',
    scope:
      'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
    settings: {
      foreground: '#5c78ff'
    }
  },
  {
    name: 'haskell variable generic-type',
    scope: 'variable.other.generic-type.haskell',
    settings: {
      foreground: '#ff5eed'
    }
  },
  {
    name: 'haskell storage type',
    scope: 'storage.type.haskell',
    settings: {
      foreground: '#5effc3'
    }
  },
  {
    name: 'support.variable.magic.python',
    scope: 'support.variable.magic.python',
    settings: {
      foreground: '#5c78ff'
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
    name: 'storage.modifier.lifetime.rust',
    scope: 'storage.modifier.lifetime.rust',
    settings: {
      foreground: '#d1d1d1'
    }
  },
  {
    name: 'support.function.std.rust',
    scope: 'support.function.std.rust',
    settings: {
      foreground: '#5ac8ff'
    }
  },
  {
    name: 'entity.name.lifetime.rust',
    scope: 'entity.name.lifetime.rust',
    settings: {
      foreground: '#d1d1d1'
    }
  },
  {
    name: 'variable.language.rust',
    scope: 'variable.language.rust',
    settings: {
      foreground: '#5c78ff'
    }
  },
  {
    name: 'support.constant.edge',
    scope: 'support.constant.edge',
    settings: {
      foreground: '#ff5eed'
    }
  },
  {
    name: 'regexp constant character-class',
    scope: 'constant.other.character-class.regexp',
    settings: {
      foreground: '#5c78ff'
    }
  },
  {
    name: 'regexp operator.quantifier',
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: '#5effc3'
    }
  },
  {
    name: 'punctuation.definition',
    scope:
      'punctuation.definition.string.begin,punctuation.definition.string.end',
    settings: {
      foreground: '#ba5aff'
    }
  },
  {
    name: 'Text',
    scope: 'variable.parameter.function',
    settings: {
      foreground: '#d1d1d1'
    }
  },
  {
    name: 'Comment Markup Link',
    scope: 'comment markup.link',
    settings: {
      foreground: '#d7e4ff46'
    }
  },
  {
    name: 'markup diff',
    scope: 'markup.changed.diff',
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
      foreground: '#ff5eed'
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
      foreground: '#5c78ff'
    }
  },
  {
    name: 'Constants',
    scope: 'constant',
    settings: {
      foreground: '#5effc3'
    }
  },
  {
    name: 'Tags',
    scope: 'entity.name.tag',
    settings: {
      foreground: '#5c78ff'
    }
  }
]
