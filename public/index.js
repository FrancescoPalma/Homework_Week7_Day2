var url = "https://restcountries.eu/rest/v1";

var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = function() {

  if (request.status === 200) {
    var jsonString = request.responseText;
    var countries = JSON.parse(jsonString);
  }

  var div = document.getElementById("dropdown-container");

  var addDropdown = document.createElement("select");
  addDropdown.setAttribute("id", "selection");
  div.appendChild(addDropdown);

  for (var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.setAttribute('id', 'single-country');
    option.setAttribute("value", countries[i].name);
    option.text = countries[i].name;
    option.value = i;
    addDropdown.appendChild(option);
  }

    var select = document.getElementById('selection');
    var handleClick = function() {
      var country = document.getElementById('single-country');
      var countryName = countries[this.value].name;
      var countryCapital = countries[this.value].capital;
      var countryPopulation = countries[this.value].population;
      console.log('the name of this country is:', countryName);

      var p = document.createElement('p');
      p.innerHTML = 'Name: ' + countryName;
      div.appendChild(p);

      var p = document.createElement('p');
      p.innerHTML = 'Capital: ' + countryCapital;
      div.appendChild(p);

      var p = document.createElement('p');
      p.innerHTML = 'Population: ' + countryPopulation;
      div.appendChild(p);
    }
    select.onchange = handleClick;
}
request.send();