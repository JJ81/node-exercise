var obj = {
	name : 'Andrew'
};

var stringObj = JSON.stringify(obj); // from object to string
console.log(typeof stringObj); // string
console.log(stringObj);
var obj = JSON.parse(stringObj);
console.log(typeof obj);
console.log(obj);

var personString = '{"name":"Andrew", "age" : 25}';
var person = JSON.parse(personString)
console.log(typeof person);
console.log(person);

const fs = require('fs');
var originalNote = {
	title : 'Some title',
	body : 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
// originalNoteString

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// noteString
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


