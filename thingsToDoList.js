let list = document.getElementById('currentItems');

let lastItemId = 0;

function addItem()  {

      let priorityStuff = document.getElementById('newitem').value;

      document.getElementById('boldWriting').innerHTML = priorityStuff;

      let newEntry = document.createElement('li');

      newEntry.appendChild(document.createTextNode(priorityStuff));
      newEntry.setAttribute('id', 'item' + lastItemId);

      let removeOriginalItemButton = document.createElement('button');

      removeOriginalItemButton.appendChild(document.createTextNode('Delete This Item Now!'));
      removeOriginalItemButton.setAttribute('onClick', 'deleteItem("'+'item'+lastItemId+'")');
      removeOriginalItemButton.setAttribute('class', 'removeButton');

      newEntry.appendChild(removeOriginalItemButton);

      lastItemId += 1;

      list.appendChild(newEntry);

}

function deleteItem(ItemId)  {

      let originalItem = document.getElementById(ItemId);

      list.removeChild(originalItem);

}
