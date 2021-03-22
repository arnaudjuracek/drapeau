import drapeau from '../'

let text = 'La Fédération Française du Paysage vous invite à la proclamation du «PALMARÈS DU PAYSAGE»'
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const dpi = window.devicePixelRatio || 1

render()
window.addEventListener('resize', () => requestAnimationFrame(() => render()))

canvas.addEventListener('click', () => {
  text = prompt(text) || text
  render()
})

function render (width = window.innerWidth, height = window.innerHeight) {
  const margin = 20
  canvas.style.setProperty('--margin', margin + 'px')
  canvas.width = (width - margin * 4) * dpi
  canvas.height = (height - margin * 4) * dpi
  canvas.style.width = (canvas.width / dpi) + 'px'
  canvas.style.height = (canvas.height / dpi) + 'px'

  const result = drapeau(text, {
    step: 1,
    minFontSize: 30,
    maxFontSize: 100,
    width: canvas.width / dpi,
    measure: (glyph, fontSize) => {
      ctx.font = `${fontSize}px "Helvetica"`
      return {
        width: ctx.measureText(glyph).width,
        height: fontSize
      }
    },
    penalties: penalties => {
      // delete penalties.HANGING_PUNCTUATION
      delete penalties.WIDOWS
      if (text.length < 100) {
        delete penalties.EOL_SHORT_WORDS
        delete penalties.UNBALANCED_LINES
      }

      penalties.HEIGHT_DIFFERENCE = {
        weight: 0.1,
        value: ({ lines, fontSize }) => {
          const height = Math.max(...lines.map(line => line.height))
          const deltaHeight = (canvas.height - height) / canvas.height
          return 1 - deltaHeight
        },
        illegal: ({ lines, fontSize }) => {
          const height = Math.max(...lines.map(line => line.height))
          const deltaHeight = (canvas.height - height) / canvas.height
          return deltaHeight < 0
        }
      }

      // penalties.OUT_OF_SQUARE = {
      //   weight: 0.25,
      //   value: ({ lines, fontSize }) => {
      //     const maxWidth = Math.max(...lines.map(line => line.width))
      //     const textHeight = lines.length * fontSize
      //     const ratio = textHeight / maxWidth
      //     return ratio > 1 ? 1 / ratio : ratio
      //   }
      // }

      return penalties
    }
  })

  console.log(result)
  ctx.scale(dpi, dpi)

  // Render all candidates
  result.candidates.forEach((candidate, index) => {
    ctx.strokeStyle = candidate.score ? `rgba(75, 150, 255, 0.3)` : 'rgba(255, 75, 78, 0.3)'
    ctx.font = `${candidate.fontSize}px "Helvetica"`
    candidate.lines.forEach((line, index) => {
      ctx.strokeText(line.value, 0, (index + 1) * candidate.fontSize)
    })
  })

  // Render best
  ctx.fillStyle = result.score ? 'black' : 'rgb(255, 75, 78)'
  ctx.font = `${result.fontSize}px "Helvetica"`
  result.lines.forEach((line, index) => {
    ctx.fillText(line.value, 0, (index + 1) * result.fontSize)
  })

  // Display score
  ctx.fillStyle = 'black'
  ctx.font = `14px "Helvetica"`
  ctx.fillText(`font-size: ${result.fontSize}`, 10, (canvas.height / dpi) - 26)
  ctx.fillText(`score: ${(result.score * 1000).toFixed(4)}`, 10, (canvas.height / dpi) - 10)
}
