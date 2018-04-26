'use strict';

import { wombat } from './other';
(function () {
	console.log("working");
})();

let button = document.getElementsByClassName('detailsButton'); // eslint-disable-line no-implicit-globals
button.addEventListener('click', toggleUserDetails); // eslint-disable-line no-undef

let toggleDisplay = function (elem) {
	console.log(wombat);
	// Bug Fix: The first instance on page load
	// does not register the display block style,
	// even when added explicitly in main.css.
	if (elem.style.display === '') {
		elem.style.display = 'none';

	} else {
		elem.style.display = (elem.style.display === 'block') ? 'none' : 'block';
	}
};

let toggleUserDetails = function(event) { // eslint-disable-line no-unused-vars
	let userElems = Array.prototype.slice.call(event.target.parentNode.children);

	for (let i = 0; i < userElems.length; i++) {
		let elem = userElems[i];

		if (elem.nodeName === 'H3') {
			toggleDisplay(elem);
		}
	}
};
