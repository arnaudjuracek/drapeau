# `drapeau`
> Take care of your ragged lines

Given a text and a width, `drapeau` will find the font-size that creates the most balanced and visually pleasing composition. It is agnostic of any rendering context, so that you can use it to create beautiful paragraphs in any project (canvas, svg, TTY…).

This is like [`FitText.js`](https://github.com/davatron5000/FitText.js), except that the best font-size for a given composition is not always the biggest.

See the [demo](https://arnaudjuracek.github.com/drapeau).

#### How it works

Built on top of [`mattdesl`](https://github.com/mattdesl)'s [`word-wrapper`](https://github.com/mattdesl/word-wrapper) which takes care of the line wrapping algorithm, this module will give a score to all possible font-sizes for a given text and width.

This score starts at maximum, and is reduced by different penalties, defined arbitrarly to produce what is considered a _good_ visual composition (no widows, well balanced ragged lines, etc…).

I am [open to discussion](https://github.com/arnaudjuracek/drapeau/issues) on what should define a plausible penalty.

<br>

## Installation

```sh
npm install --save drapeau
```

## Usage

See [`example/`](example) for a complete canvas implementation.

### Basic usage

```js
import drapeau from 'drapeau'

const { fontSize } = drapeau('lorem ipsum…', {
  step: 1,
  minFontSize: 12,
  maxFontSize: 72,
  width: 600,

  // This function will be used to measure the glyphs during word-wrapping and
  // penalties evaluation: default is monospace.
  // See example/ for a more complete implementation.
  measure: function (glyph, fontSize) {
    return { width: 1, height: 1 }
  },

  // See « hacking penalties » below.
  penalties: function (penalties) {
    return penalties
  }
})
```

<sup>**Note:** all dimensions related properties (`step`, `minFOntSize`, `maxFontSize`, `width`…) are expressed in user defined unit. The core of the module is agnostic of any render context, only your implementation will use specific units.</sup>

### Hacking penalties

The goal of this module is to provide good enough defaults to not have to deal with penalties in most of the cases. However, some implementations may need to add, modify or even delete some penaltes.

To personnalize the way the score is computed, the options object therefore accepts a `penalties` property. This property is expectec to be a function which takes a deep cloned object of the default penalties as a parameter, and returns a mutated version of it:

```js
import drapeau from 'drapeau'

const { fontSize } = drapeau('lorem ipsum…', {
  penalties: function (penalties) {
     // See what penalties are applied by default
    console.log(Object.keys(penalties))

    // Delete a default penalty
    // Note that the penalties object is cloned, so that you can mutate it however you like
    delete penalties.AVOID_WIDOWS

    // Mutate a default penalty
    penalties.WIDOWS.weight = 0.1

    // Add a custom penalty
    penalties.customPenality = {
      // Define the weight of this penalty compared to the others.
      // Should be in [0~1] range, default is 1.
      weight: 0.5,

      // If true, the penalty is ignored and does not impact the final score
      ignore: context => context.lines.length < 2,

      // If true, set the score to 0
      illegal: context => context.lines.length > 10,

      // Should return a value in the [0~1] range, which will be applied to the score,
      // 1 being the best score possible, 0 the worst
      value: context => …
    }

    return penalties
  }
})
```

<sup>See `DEFAULT_PENALITIES` in [`index.js`](index.js).</sup>


## Development

```sh
$ npm install             # install all npm dependencies
$ npm run example:serve   # start the dev server with livereload on the example folder
$ npm run example:deploy  # deploy your example folder on a gh-page branch
$ npm run test            # lint your js inside the lib folder
```

## Dependencies
- [`word-wrapper`](https://github.com/mattdesl/word-wrapper) by [`mattdesl`](https://github.com/mattdesl) for the line-wrapping algorithm.
- [`lodash.clonedeep`](https://www.npmjs.com/package/lodash.clonedeep) to deep-clone the default penalties object.

## License
[MIT.](https://tldrlegal.com/license/mit-license)
