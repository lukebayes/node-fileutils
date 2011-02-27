
var assert = require('assert');
var eachFileMatching = require('fileutils').eachFileMatching;

(function exported() {
  assert.ok(eachFileMatching, "Export should be working");
})();

(function matchFiles() {
  var completeCalled = false;
  var files = [];
  var stats = [];
  eachFileMatching(/_test.js/, 'test/fixtures/file_matching', function(err, file, stat) {
    if (err) throw err;
    files.push(file);
    stats.push(stat);
  }, function(err, allFiles, allStats) {
    completeCalled = true;
    var count = 5;
    assert.equal(count, files.length);
    assert.equal(count, stats.length);
    assert.equal(count, allFiles.length);
    assert.equal(count, allStats.length);
  });
})();

