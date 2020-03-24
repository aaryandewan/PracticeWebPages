var form = document.getElementById('addForm');
var items = document.getElementById('items');
var searchBox = document.getElementById('filter');


searchBox.addEventListener('keydown', filterItems);
items.addEventListener('click', delitem);
form.addEventListener('submit', itemadded);


function itemadded(x){
	x.preventDefault();

	var newItem = document.getElementById('item').value;
	var lielem = document.createElement('li');

	lielem.className = 'list-group-item';

	lielem.appendChild(document.createTextNode(newItem));


	var delbutton = document.createElement('button');
	delbutton.className = 'btn btn-danger btn-sm float-right delete';

	delbutton.appendChild(document.createTextNode('X'));

	lielem.appendChild(delbutton);



	items.appendChild(lielem);


}

function delitem(e){
	if (e.target.classList.contains('delete')){
		if(confirm("Are you sure bro?")){
			var temp = e.target.parentElement;
			items.removeChild(temp);
		}
	}
}


function filterItems(e){
	
	var text = e.target.value.toLowerCase();
	var tempItems = items.getElementsByTagName('li');
	Array.from(tempItems).forEach(function(item){
				var itemName =  item.firstChild.textContent;
				console.log(itemName);

	if(itemName.toLowerCase().indexOf(text) != -1){
		item.style.display = 'block';
	}
	else{
		item.style.display = 'none';
	}

});
}