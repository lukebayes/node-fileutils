
var assert = require('assert');
var eachFile = require('fileutils').eachFile;

var fixturePath = 'test/fixtures/';
var defaultTimeout = 10;

(function exported() {
  assert.ok(eachFile, "Export should be working");
})();

(function acceptsPathAndCallback() {
  eachFile(fixturePath, function() {});
})();

(function callsWithErrorIfPathDoesNotExist() {
  eachFile('missingdir', function(err, file) {
    assert.ok(err, 'Should provide an error');
  });

  setTimeout(function() {}, defaultTimeout);
})();

(function callWithEmptyDirectoryCallsError() {
  eachFile(fixturePath + 'empty/', function(err, file) {
    assert.ok(err, 'Should provide an error');
  });
})();

(function returnsFilesToComplete() {
  eachFile(fixturePath + 'each/', function(err, file, stat, files) {
    if (err) throw err;
  });

})();

