# Implementation of isBlank for JavaScript Strings

```js
const isBlank = require('isBlank');
isBlank(''); // => true
isBlank('   '); // => true
isBlank("   \n "); // => true
isBlank(null); // => true
isBlank(undefined); // => true
isBlank('hey!'); // => false
isBlank('\u200C\uFEFF'); // => false
isBlank('🍍'); // => false
```

## Tests

Run:

    $ npm test

## Benchmarking

Run:

    $ npm run benchmark

For all cases see `benchmark.js`
