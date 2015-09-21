// Empty JS for your own code to be here
new WOW().init();
Splash.enable('windcatcher');

window.onload = function() {
	Splash.destroy();
}
setTimeout(
	function() {
		$('#main-carousel').carousel({
			interval: 6000,
			pause: "no"
		})
	}, 3000)