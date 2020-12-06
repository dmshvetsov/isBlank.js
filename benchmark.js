const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('trim & length', function() {
  ' '.trim().length === 0
})
suite.add('trim & !length', function() {
  !' '.trim().length
})
.add('trim & !', function() {
  !' '.trim()
})
.add('trim === empty string', function() {
  !' '.trim() === ''
})
.add('regexp match', function() {
  ' '.match(/^\s*$/)
})
.add('regexp test', function() {
  /^\s*$/.test(' ')
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
