
// Fecthing google spreadsheet with redirections accourding to:
// https://gist.github.com/terrywbrady/a03b25fe42959b304b1e
// Form:
// https://docs.google.com/forms/d/e/1FAIpQLSfZOTDiqlHhM3ycHXuo6rgvcMrFZcYDcBEHqQ1eVn6iD_7rvA/viewform
// Results:
// https://docs.google.com/spreadsheets/d/1f_EMXyJart-AjHamwZWFwYIANJcBuDaO_oG5cPgBk1s/edit#gid=1929501277
// Published results:
// https://docs.google.com/spreadsheets/d/1f_EMXyJart-AjHamwZWFwYIANJcBuDaO_oG5cPgBk1s/pubhtml

class Redirect {
  constructor(timestamp, short_name, destination, category, description) {
		this.timestamp = timestamp;
    this.short_name = short_name;
    this.destination = destination;
    this.category = category;
    this.description = description;
  }
}

var spData = null;
function doData(json) {
  spData = json.feed.entry;
}

function loadRedirects() {
  var data = spData;
  var redirects_dict = {};

  // data per column:
  // 0. timestamp
  // 1. short_name
  // 2. destination
  // 3.	category 
  // 4. description 
  var numColumns = 5;
  // skipping row 1 which is the titles
  for (var rowStart = numColumns; rowStart < data.length; rowStart += numColumns) {
	var timestamp = data[rowStart + 0]["gs$cell"]["$t"];
    var short_name = data[rowStart + 1]["gs$cell"]["$t"];
    var destination = data[rowStart + 2]["gs$cell"]["$t"];
    var category = data[rowStart + 3]["gs$cell"]["$t"];
    var description = data[rowStart + 4]["gs$cell"]["$t"];

    redirects_dict[short_name] = new Redirect(timestamp, short_name, destination, category, description);
		console.log(redirects_dict[short_name]);
  }

  return redirects_dict;
}
