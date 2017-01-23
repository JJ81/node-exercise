const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;

//console.log( _.isString(true) );

// var filteredArray = _.uniq(['Mike', 1, 1,2,3,4,4, 'Mike', 'mike']);
// console.log( filteredArray );

//var user = os.hostname();
//console.log(user);
//fs.appendFile('./greeting.txt', `Hello ${user}`);


const notes = require('./notes');
//var command = process.argv[2];
var command = argv._[0];
console.log('command : ', command);
console.log('Process : ', process.argv);
console.log('Yargs', argv); // Yargs { _: [ 'add' ], title: 'secrets 2', '$0': 'app.js' }


if(command === 'add'){
	//console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
	//console.log('Listing all notes');
	notes.getAll();
}else if(command === 'read'){
	//console.log('Reading note');
	notes.getNote(argv.title);
}else if(command === 'remove'){
	//console.log('Remove note');
	notes.removeNote(argv.title);
}else{
	console.log('command not recognized');
}

/**

	node app.js add --title title --body body
	=> Yargs { _: [ 'add' ], title: 'title', body: 'body', '$0': 'app.js' }
*/




