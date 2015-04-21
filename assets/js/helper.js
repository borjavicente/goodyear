define( function() {
	document.body.addEventListener('click', function() {
	    if (window.innerWidth <= '640') {
	        if (this.className == 'transitionIn') {
	            this.className = 'transitionOut';
	        } else {
	            this.className = 'transitionIn';
	        }
	    }
	});
})