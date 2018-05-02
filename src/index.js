let displayControls = (function () {

	// let button = document.getElementsByClassName('detailsButton'); // eslint-disable-line no-implicit-globals
  // button.addEventListener('click', toggleUserDetails); // eslint-disable-line no-undef

	function toggleDisplay(elem) {
		if (elem.style.display === '') {
			elem.style.display = 'none';

		} else {
			elem.style.display = (elem.style.display === 'block') ? 'none' : 'block';
		}
	}

	function toggleUserDetails() {
	  let userElems = Array.prototype.slice.call(event.target.parentNode.children);

		for (let elem of userElems) {
			if (elem.nodeName === 'H3') {
			  toggleDisplay(elem);
		  }
		}
	}

	window.toggleUserDetails = toggleUserDetails;

	return {
		toggleDisplay: toggleDisplay,
		toggleUserDetails: toggleUserDetails
	}

})();
