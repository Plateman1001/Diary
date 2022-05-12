
const items = { ...localStorage };
var values = [];
function allStorage() {
	(keys = Object.keys(localStorage)), (i = keys.length);
	while (i--) {
		values.push(localStorage.getItem(keys[i]));
	}
	return values;
}
allStorage();
objects = [];
for (let i = 0; i < values.length; i++) {
	let objj = JSON.parse(values[i]);
	objects.push(objj);
}
console.log(objects);

function addElement(title, content, date) {
	// create a new div element
	const newDiv = document.createElement("div");
	const newP = document.createElement("h1");

	// and give it some content
	const newTitle = document.createTextNode(title);
	const newContent = document.createTextNode(content);
	const newDate = document.createTextNode(date);

	// add the text node to the newly created div
	newDiv.appendChild(newTitle);
	let titl = document.createElement("h1");
	let conten = document.createElement("p");
	let day = document.createElement("h3");
	newDiv.append(titl);
	newDiv.append(conten);
	newDiv.append(day);

	titl.append(newTitle);
	conten.append(newContent);
	day.append(newDate);

	// add the newly created element and its content into the DOM
	const currentDiv = document.getElementById("fake");
	document.body.appendChild(newDiv, currentDiv);
}

objects.forEach((entry) => {
	addElement(entry.title, entry.content, entry.date);
});
