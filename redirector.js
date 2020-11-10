'use strict';

$(document).ready(function () {
	var redirects_dict = loadRedirects();
	
	const url = new URL(window.location.href);
	var source_name = url.search.slice(1);
	if (redirects_dict[source_name]) {
		var destination = redirects_dict[source_name].destination;
		console.log(destination);
		window.location.replace(destination);
	} else {
		console.log("No such link: " + source_name);
		window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSfZOTDiqlHhM3ycHXuo6rgvcMrFZcYDcBEHqQ1eVn6iD_7rvA/viewform");
	}
});
