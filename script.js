var number = 0;
function add() {
	var box = document.createElement('div');
	var p = document.createElement('p');
	var p2 = document.createElement('p');
	p.innerHTML = document.getElementById('name').value;
	p2.innerHTML = document.getElementById('type').value + '(' + document.getElementById('code').value + ')';
	idnamep = 'p' + number;
	idnamep2 = 'p2' + number;
	let colors = document.querySelector('#colors');
	if (document.getElementById('type').value == 'hex') {
		box.style.backgroundColor = document.getElementById('code').value;
		box.style.width = '200px';
		box.style.height = '150px';
	}
	if (document.getElementById('type').value == 'rgb') {
		box.style.backgroundColor = 'rgb(' + document.getElementById('code').value + ')';
		box.style.width = '200px';
		box.style.height = '150px';
	}
	if (document.getElementById('type').value == 'rgba') {
		box.style.backgroundColor = 'rgba(' + document.getElementById('code').value + ')';
		box.style.width = '200px';
		box.style.height = '150px';
	}
	colors.appendChild(box);
	idname = 'Div' + number;
	box.setAttribute("id", idname);
	p.setAttribute("id", idnamep);
	box.appendChild(p);
	box.appendChild(p2);
	number++;
	console.log(idname);
}
