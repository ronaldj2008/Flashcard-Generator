

exports.BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
}

exports.ClozeCard = function(text, cloze) {

	var textToLower = text.toLowerCase();
	var clozetoLower = cloze.toLowerCase();
	// console.log(textToLower, clozetoLower);
	// if(!textToLower.includes(clozetoLower)) {
	// 	console.log('Error: cloze-deletion does not appear within full text -- <' + cloze + '>');
	// 	return;

	// }

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}