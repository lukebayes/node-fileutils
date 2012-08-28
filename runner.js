
// NOTE(lbayes): Run with:
//     NODE_PATH=src node runner.js

require('./test/each_file_or_directory_test');
require('./test/each_file_test');
require('./test/each_file_matching_test');

process.on('exit', function() {
  console.log('>> Exiting after all tests');
});

