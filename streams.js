const fs = require('fs');

//                                                       automatically converts buffers to strings
const readStream = fs.createReadStream('./docs/999.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/1998.txt');

//            event,  the data
// readStream.on('data', (chunk) => {
// 	console.log('---- NEW CHUNK ----');
// 	console.log(chunk);
// 	writeStream.write('\nNEW CHUNK\n'); 
// 	writeStream.write(chunk);
// });

// piping (easier way to read and then write)
readStream.pipe(writeStream); // reads from readStream and writes to writeStream