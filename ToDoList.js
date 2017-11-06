
//Revision of DOM manipulation and Google are my best friends here!


// When I click on the Add button with input field, a new item should be created in the list ?


function addNewItem() {

      let li = document.createElement('li');
      let itemValue = document.getElementById('item').value;
      let ul = document.getElementById('currentitems');

      let txt = document.createTextNode(itemValue);

      li.appendChild(txt);

      if(itemValue === '')  {
      //if item entered into field is an empty string !
        alert = ('Please write an entry here!')

      } else{

        document.getElementById('currentitems').appendChild(li);

      }

      let button = document.createElement('BUTTON');
      button.innerHTML = 'DELETE';
      button.onClick = () => ul.removeChild(li);
      button.classname = 'close item now';
      li.appendChild(button);

      for(i=0; i<hide.length; i++)  {

        hide[i].onClick = function () {

          let item = this.parentElement;
          item.style.display = 'none';

        }

      }
      }


// Create a function for closing each item on list, using a button, and append this to each item on the list ?

// const list = document.getElementsByTagName('LI');

//const i; //index value of item

// for(i=0; i<list.length; i++)  {

    // let button = document.createElement('BUTTON');
    // // let word = document.createTextNode('DELETE');
    // // button.classname = 'close item now';
    // //button.appendChild(word);
    // list[i].appendChild(button);

// }

// In order to hide the current item on the list, click on a button ?

const hide = document.getElementsByClassName('hide');

//const i; //index value of item

for(i=0; i<hide.length; i++)  {

    hide[i].onClick = function()  {
      let item = this.parentElement;
      item.style.display = 'none';

    }
}

// When I click on an item in the list - if true, add a checkbox tick, otherwise return false ?

const itemList = document.querySelector('li');

itemList.addEventListener('click', function(EventListener)  {

      if(EventListener.target.tagname === 'LI') {
        EventListener.target.classList.toggle('completed item');
      }

}, false);
