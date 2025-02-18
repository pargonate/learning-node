const fs = require('fs');

// KEY TERMS: 
// async = it takes some time, not immediate
// buffer = a chunk of data that is not yet readable
// Stream = using data before it has finished loading

// reading (async, it takes some time)
fs.readFile('./docs/blog1.txt', (err, data) => {
	if (err) {
		console.log(err);
	} 
	console.log(data); // Buffer
	console.log(data.toString()); // String
});

// writing (async, it takes some time)
fs.writeFile('./docs/blog1.txt', "Sup, Pargonate!", () => {
	console.log("file was written");
})

// creating files
fs.writeFile('./docs/blog2.txt', "Sup, Pargonate!", () => {
	console.log("file was created/written!");
})

// directories (cannot create if already made)
fs.mkdir('./docs', (err) => {
	if (err) {
		console.log(err); // since docs already exists, it cannot create it
	}
	console.log("folder created"); // will never run
})

// thus it's safer to use the following code:

if(!fs.existsSync('./assets')) { // Checks to see if the folder exists, it blocks the code execution until it finishes
	fs.mkdir('./assets', (err) => {
		if (err) {
			console.log(err);
		}
		console.log("folder created"); // now will run
	})
} else {
	fs.rmdir('./assets', (err) => { // if the folder exists, delete it
		if (err) {
			console.log(err);
		}
		console.log("folder deleted");
	})
}

// deleting files
if (fs.existsSync('./docs/altf4me.txt')) {
	fs.unlink('./docs/altf4me.txt', (err) => {
		if (err) {
			console.log(err);
		} 
		console.log("file deleted");
	});
}