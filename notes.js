// console.log('test');
// module.exports.addNotes = () => {
// 	console.log('Add Note');
// 	return 'New Note';
// };

var addNote = (title, body) => { // 무명함수
	console.log('Adding Note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting note', title);
};

var removeNote = (title) => {
	console.log('Removing note', title);
};

module.exports = {
	addNote, // addNote : addNote es6 syntax
	getAll,
	getNote,
	removeNote
};