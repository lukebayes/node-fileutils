
var assert = require('assert');
var eachFileOrDirectory = require('fileutils').eachFileOrDirectory;

(function shouldCallbackOnFiles() {
  var completeCalled = false;
  var fileHandlerCalled = false;
  var files = [];
  var stats = [];

  eachFileOrDirectory('test/fixtures/each_file_or_directory', function(err, file, stat) {
    if (err) return console.log("> ERROR: " + err);
    fileHandlerCalled = true;
    files.push(file);
    stats.push(stat);
  }, function(items, stats) {
    completeCalled = true;
    assert.equal(6, files.length);
    assert.equal(6, stats.length);
  });

  setTimeout(function() {
    assert.ok(fileHandlerCalled, 'fileHandler was not called!');
    assert.ok(completeCalled, 'Complete was not called!');
  }, 100);
})();

(function shouldWorkWithFullDirectories() {
  var completeCalled = false;
  var fileHandlerCalled = false;
  var files = [];
  eachFileOrDirectory('test/fixtures/file_matching', function(err, file, stat) {
    fileHandlerCalled = true;
    files.push(file);
  }, function(items, stats) {
    assert.equal(11, files.length);
    completeCalled = true;
  });

  setTimeout(function() {
    assert.ok(fileHandlerCalled, 'fileHandler was not called!');
    assert.ok(completeCalled, 'Complete was not called!');
  }, 100);
})();
