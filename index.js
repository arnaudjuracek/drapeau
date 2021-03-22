import cloneDeep from 'lodash.clonedeep'
import wrap from 'word-wrapper'

const DEFAULT_PENALTIES = {
  HANGING_PUNCTUATION: {
    illegal: ({ lines }) => lines.find(line => /^[:?!.,]/.test(line.value))
  },

  TRUNCATIONS: {
    illegal: ({ words, lines }) => {
      const truncatedWords = words.filter(word => !lines.find(line => line.value.includes(word)))
      return truncatedWords.length > 0
    }
  },

  WIDOWS: {
    // Widow has merely legals. Returning a really small value instead of
    // 0 so that they may be allowed in extreme compositions
    weight: 0.01,
    value: () => 1,
    ignore: ({ lines, words }) => {
      const hasWidow = lines[lines.length - 1] === words[words.length - 1]
      return !hasWidow
    }
  },

  EOL_SHORT_WORDS: {
    weight: 0.5,
    ignore: ({ lines }) => lines.length <= 2,
    value: ({ lines }) => {
      const linesWithShortWordsAtEnd = lines.filter(line => /\b\w{1,3}\s?$/.test(line.value))
      return 1 - (linesWithShortWordsAtEnd.length / lines.length)
    }
  },

  UNBALANCED_LINES: {
    weight: 0.5,
    ignore: ({ lines }) => lines.length <= 2,
    value: ({ lines }) => {
      // All lengths are normalized on the longest one
      const maxWidth = Math.max(...lines.map(line => line.width))
      const normalizedWidths = lines.map(line => line.width / maxWidth)
      const mean = normalizedWidths.reduce((sum, len) => sum + len, 0) / lines.length

      // SEE https://en.wikipedia.org/wiki/Standard_deviation
      const deviation = Math.sqrt((1 / lines.length) * normalizedWidths.reduce((sum, len) => sum + (len - mean) ** 2), 0)
      const coefVariation = deviation / mean
      return (1 - coefVariation)
    }
  }
}

export function Drapeau (text, {
  step = 1,
  minFontSize = 12,
  maxFontSize = 72,
  width = 300,

  // IMPORTANT: the measure function signature is built on top of MattDesl's one
  // they are not the same (default to monospace)
  measure = (glyph, fontSize) => ({ width: 1, height: 1 }),
  penalties = clonedDefaultPenalities => clonedDefaultPenalities
} = {}) {
  penalties = penalties(cloneDeep(DEFAULT_PENALTIES))
  const candidates = []

  // Create an array of words which will be exposed to the context of penalties
  const words = text.split(/\s/)

  for (let fontSize = minFontSize; fontSize < maxFontSize; fontSize += step) {
    const lines = wrap.lines(text, {
      width,
      mode: 'wrap',
      measure: createCachableMeasure(fontSize)
    })

    // This context object will be passed as argument to all penalties callable properties
    const context = {
      words,
      maxFontSize,
      minFontSize,
      fontSize,
      lines
    }

    // We start at maximum score, and reduce it by introducing weighted penalties
    let score = 1
    for (const penalty of Object.values(penalties)) {
      if (penalty.weight <= 0) continue
      if (penalty.ignore && penalty.ignore(context)) continue
      if (penalty.illegal && penalty.illegal(context)) { score = 0; break }
      if (!penalty.value) continue

      score *= penalty.value(context) * (penalty.weight || 1)
    }

    candidates.push(Object.assign({}, context, { score }))
  }

  // Sort candidates by DESC score so that the first one is the best match
  candidates.sort((a, b) => b.score - a.score)

  return Object.assign({}, candidates[0], { candidates })

  function createCachableMeasure (fontSize) {
    return function (text, start, end, lineWidth) {
      let totalWidth = 0
      let maxHeight = 0
      for (var index = start; index < end; index++) {
        const glyph = text.charAt(index)
        const char = measure(glyph, fontSize)
        totalWidth += char.width
        if (char.height > maxHeight) maxHeight = char.height
        if (totalWidth >= lineWidth) break
      }

      return {
        start,
        end: index,
        value: text.substring(start, end),
        width: totalWidth,
        height: maxHeight
      }
    }
  }
}

export default Drapeau
