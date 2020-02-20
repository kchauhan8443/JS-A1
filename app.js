// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = ['', '', '', '', ''];
var speakButton = document.querySelector('#speakButton');


var nouns = ['The turkey', 'Mom', 'Dad','The dog','My teacher', 'The elephant','The cat'];

var verbs = ['sat on', 'ate', 'danced with','saw',"doesn't like",'kissed'];

var adjectives = ['a funny', 'a scary', 'a goofy','a slimy','a barking', 'a fat'];

var livingthings = ['goat', 'monkey', 'fish','cow','frog','bug','worm'];

var places = ['on the moon', 'on the chair', 'in my soup','on the grass','in my shoes'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
	speakNow(textToSpeak.join(' '));
}


window.addEventListener('load', function () {
	[nouns,verbs,adjectives,livingthings,places]
		.forEach(function (list, iList) {
			var main = document.querySelector('main');
			var section = document.createElement('section');
			var button = document.createElement('button');
			button.appendChild(document.createTextNode('text'));


			button.addEventListener('click', function (event) {
				var index = Math.floor(Math.random() * Math.floor(list.length));
				textToSpeak[iList] = list[index];
				document.querySelector('#container').innerHTML = textToSpeak.join(' ');
				speakNow(list[index]);
			});
			section.appendChild(button);

			list.forEach(function (things) {
				var z = document.createElement('p');
				z.appendChild(document.createTextNode(things));

				section.appendChild(z);
			});

			main.appendChild(section);
		});
});
