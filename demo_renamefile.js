var fs = require('fs');

fs.rename('demo_newfile.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});