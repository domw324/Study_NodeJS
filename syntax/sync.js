var fs = require('fs');

/*
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/

//readFileAsync
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(error, result){
    console.log(result);
});
console.log('C');