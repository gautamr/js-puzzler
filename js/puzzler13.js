var name = 'World!';

(function() {
    if (typeof name === 'undefined') {
	    var name = 'Mr. Bond';
		console.log('Hello, ' + name);
	} else {
	    console.log('Hello, ' + name);
	}
})();