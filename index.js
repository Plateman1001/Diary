'use Strict';
function getFormattedDate() {

	const date = new Date();

	const n = date.toDateString();

	const time = date.toLocaleTimeString();

	return 'Date: ' + n + '\nTime: ' + time
}

const entre = () => {
	let tit = document.getElementById("title").value;
	let cont = document.getElementById("content").value;
	let obj = {};
	if (tit) {
		if (cont) {
			obj.yesNo = true
		}
		obj.yesNo = false
	}
	obj.title = tit;
	obj.content = cont;
	obj.date = getFormattedDate();
	console.log(obj);
	if (obj.yesNo === false) {
		window.localStorage.setItem(obj.date, JSON.stringify(obj));
	}

 	document.getElementById("title").value = ''
	document.getElementById("content").value = ''
	
};

