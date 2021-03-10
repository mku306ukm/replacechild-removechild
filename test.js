var newElement = document.createElement("li");

var newText = document.createTextNode("wow new text");

newElement.appendChild(newText);

var target = document.getElementById("list");

var oldElement = target.children[1];

target.replaceChild(newElement,oldElement);