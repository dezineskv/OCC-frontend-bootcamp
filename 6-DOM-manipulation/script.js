// accessing elements
// by ID
const heading = document.getElementById('heading');

// by class
// const heading = document.getElementsByClassName('heading1');

// by tag name
// const heading = document.getElementsByTagName('h1');

console.log(heading);

// a node list like an array...
const listItems = document.querySelectorAll('#list li');
console.log(listItems);

// modifying elements
// contents using innerHTML
heading.innerHTML = "Learning DOM manipulation";
// or document.getElementById('heading').innerHTML = "Learning DOM"
// or heading2[0].innerHTML = "Learning"

// or change contents using textContent for text only 
heading.textContent = 'All about manipulation of DOM'

// can change the attributes by changing setAttribute
// ex. change heading 1 to a highlight

heading.setAttribute('class', 'highlight')

// modifying styles using style property. change button ex.
const button = document.getElementById('btn');
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// can add new elements dynamically using createElement
const newParagraph = document.createElement('p');
//make sure to include the . before the class when appending using query selector

newParagraph.textContent = "This is a new paragraph.";
document.querySelector('.container').appendChild(newParagraph);

// removing elements dynamically...from node def from before
listItems[1].remove();

// handling events. add event listener for button click. first param type of event. create addlistimen function. every time button is clicked the new innerHTML item gets added to the unordered list.
button.addEventListener('click', addListItem);
function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = "new list item";
    document.getElementById('list').appendChild(newListItem);
}

// Click Event: Triggered when an element is clicked.

// Mouseover Event: Occurs when the mouse pointer is moved over an element.

// Keydown Event: Fired when a key is pressed down.

// Submit Event: Triggered when a form is submitted.

// Load Event: Occurs when a page or an element has finished loading.

// Change Event: Fired when the value of an input element changes.

// Focus and Blur Events: These happen when an element gains or loses focus.







