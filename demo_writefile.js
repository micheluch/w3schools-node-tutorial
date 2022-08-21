var fs = require('fs');

fs.writeFile('demo_newfile.txt', 'This is a test', function(err) {
    if (err) throw err;
    console.log('Replaced!');
});