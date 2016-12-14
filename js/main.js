// create a variable with a string stored inside
var neonGenesis = 'Evangelion'; 

// create a variable with a number stored inside
var evaUnit = 01;

// create a variable with a boolean stored inside
var readyLaunch = true;

// create a variable with an array stored inside
var pilots = ['Asuka', 'Shinji', 'Rei'];

// create a for loop that loops over your array
// logging each item to the console
for(var i = 0; i < pilots.length; i++){
	console.log(pilots[i]);
}

// practice
var evaUnits = [01, 02, 03];
for(var i = 0; i < evaUnits.length; i++){
	console.log(evaUnits[i]);
}

var classes = ['cleric', 'bard', 'fighter', 'warlock'];
for(var i = 0; i < classes.length; i++){
	console.log(classes[i]);
}

var spells = ['firebolt', 'icy grip', 'darkness', 'radiance of the dawn']
for(var i = 0; i < spells.length; i++){
	console.log(spells[i]);
}
/*// store our JS selector in a variable
var heading = document.getElementById('title');

// get the innerText and log it to the console
console.log(heading.innerText);

// set the innerText in our DOM
heading.innerText = 'Welcome to my form';

var name = 'Sean';
heading.innerText = 'Sup, ' + name;

// update the innerHTML of a DOM element with the id of 'main-section'
document.getElementById('main-section').innerHTML = '<h2>Something else</h2><p>foo bar</p>';

// select multiple elements by their tag name
var allParas = document.getElementsByTagName('p');

// log the item with an index of 0 from our allParas array
console.log(allParas[0]);

// update the innerText of an item in our allParas array
allParas[2].innerText = 'Updated this para via JS';

// select only the item with the index of 2, from our array
// of elements that have a class name of 'heading'
var secondHeading = document.getElementsByClassName('heading')[2];
console.log(secondHeading);*/

// EXERCISE
/*for(var i = 0; i < allParas.length; i++){
	console.log(allParas[i]);
}
*/
//
document.getElementById('cool-button').addEventListener('click', function(){
	alert('I have been clicked');
});

// listen for the click on an <h1> event
document.getElementById('title').addEventListener('click', function(){
	alert('You\'re clicking on your H1!!!!');
});







