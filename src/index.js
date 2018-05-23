// Creates entry point for css bundling
// import "./main.css";


(() => {

	function toggleDisplay(elem) {
		if (elem.style.display === '') {
			elem.style.display = 'none';

		} else {
			elem.style.display = (elem.style.display === 'block') ? 'none' : 'block';
		}
	}

	function toggleUserDetails(event) {
	  let userElems = Array.prototype.slice.call(event.target.parentNode.children);

		for (let elem of userElems) {
			if (elem.nodeName === 'H3') {
			  toggleDisplay(elem);
		  }
		}
	}

	window.toggleUserDetails = toggleUserDetails;


})();
