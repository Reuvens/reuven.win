'use strict';

$(document).ready(function () {
	var redirects_dict = loadRedirects();
	
	const url = new URL(window.location.href);
	var source_name = url.search.slice(2);
	if (redirects_dict[source_name]) {
		var destination = redirects_dict[source_name].destination;
		console.log(destination);
		window.location.replace(destination);
	} else {
		console.log("No such link: " + source_name);
	}
});
