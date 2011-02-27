
require.paths.unshift('src');
require.paths.unshift('test');

require('each_file_or_directory_test');
require('each_file_test');
require('each_file_matching_test');

process.on('exit', function() {
  console.log('>> Exiting after all tests');
});

