var url = "https://restcountries.eu/rest/v1";

var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = function() {
  if (request.status === 200) {
    var jsonString = request.responseText;
    var countries = JSON.parse(jsonString);
  }
  var div = document.getElementById("dropdown-container");

  console.log(countries[0]);

  var addDropdown = document.createElement("select");
  addDropdown.setAttribute("id", "mySelect");
  div.appendChild(addDropdown);

  for (var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", countries[i].name);
    option.text = countries[i].name;
    addDropdown.appendChild(option);
  }
}
request.send();
