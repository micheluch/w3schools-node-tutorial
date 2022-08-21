var fs = require('fs');

fs.unlink('demo_newfile.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});