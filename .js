var list = document.getElementById('todo-list');
var btn = document.getElementById('add-item');
var inputBox = document.getElementById('todo-input');

var currentInputValue = " ";

inputBox.addEventListener('input', function (e) {

      currentInputValue = e.target.value;

      console.log(Event.target.getAttribute('value'));

});

btn.addEventListener('click', function () {

      var newListElememt = document.createElement('li');

      var textNode = document.createTextNode((currentInputValue));

      newListElememt.appendChild(textNode);

      newListElememt.id = " " + (currentInputValue);


      list.appendChild(newListElememt);
      console.log(list.childElementCount);

      inputBox.value = " ";
      currentInputValue = " ";
});