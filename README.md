# is-animated-image

🖼️ Check if an image is animated.

Created by create-n.

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Standard Version][standard-version-image]][standard-version-url]
[![Codecov][codecov-image]][codecov-url]

[travis-image]: https://img.shields.io/travis/vivaxy/is-animated-image.svg?style=flat-square
[travis-url]: https://travis-ci.org/vivaxy/is-animated-image
[npm-version-image]: https://img.shields.io/npm/v/is-animated-image.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/is-animated-image
[npm-downloads-image]: https://img.shields.io/npm/dt/is-animated-image.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/is-animated-image.svg?style=flat-square
[license-url]: LICENSE
[standard-version-image]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[codecov-image]: https://img.shields.io/codecov/c/github/vivaxy/is-animated-image.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/vivaxy/is-animated-image

[![DOI](https://zenodo.org/badge/173257138.svg)](https://zenodo.org/badge/latestdoi/173257138)

# Usage

```js
const imageBuffer = null /* get image buffer somewhere*/;
const getImageMeta = require('is-animated-image');
const { ext, mime, animated } = getImageMeta(imageBuffer);
if (animated) {
  // is animated image
} else {
  // is not animated image
}
```
