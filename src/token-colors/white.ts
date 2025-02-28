import { TokenColor } from '@/src/types'

export const whiteTokenColors: TokenColor[] = [
  {
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: '#266f6f',
      fontStyle: 'italic'
    }
  },
  {
    scope: [
      'string',
      'punctuation.definition.string',
      'punctuation.support.type.property-name.begin.json',
      'punctuation.support.type.property-name.end.json'
    ],
    settings: {
      foreground: '#D12F1B'
    }
  },
  {
    scope: ['constant.numeric'],
    settings: {
      foreground: '#272AD8'
    }
  },
  {
    scope: ['constant.other.placeholder', 'constant.character.escape'],
    settings: {
      foreground: '#000000'
    }
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
    settings: {
      foreground: '#AD3DA4',
      fontStyle: 'bold'
    }
  },
  {
    scope: ['keyword.control.directive', 'punctuation.definition.directive'],
    settings: {
      foreground: '#78492A',
      fontStyle: ''
    }
  },
  {
    scope: ['variable.parameter'],
    settings: {
      foreground: '#057CB0'
    }
  },
  {
    scope: [
      'entity.name.type',
      'entity.other.inherited-class',
      'storage.type.haskell'
    ],
    settings: {
      foreground: '#23575C'
    }
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
    settings: {
      foreground: '#4B21B0',
      fontStyle: ''
    }
  },
  {
    scope: ['entity.name.function', 'support.function'],
    settings: {
      foreground: '#3E8087'
    }
  },
  {
    scope: ['support.function.builtin'],
    settings: {
      foreground: '#8854d3'
    }
  },
  {
    scope: [
      'variable.other.property',
      'variable.other.object.property',
      'entity.name.variable.field'
    ],
    settings: {
      foreground: '#3E8087'
    }
  },
  {
    scope: ['entity.name.tag'],
    settings: {
      foreground: '#4B21B0'
    }
  },
  {
    scope: [
      'entity.other.attribute-name',
      'support.type.property-name.css',
      'support.type.property-name.media.css'
    ],
    settings: {
      foreground: '#8854d3'
    }
  }
]
