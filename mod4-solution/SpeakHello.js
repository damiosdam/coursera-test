(function (window) {
	var helloSpeaker = {};
	helloSpeaker.speak = function speak(name) {
		console.log(`Hello ${name}`);
	};

	window.helloSpeaker = helloSpeaker;
})(window);
