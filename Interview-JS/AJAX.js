console.log("From AJAX");
// AJAX -> Asynchronous JavaScript And XML
// XML
// XHR - XML Http Request
// Using XHR

function reqListener() {
  const data = JSON.parse(this.responseText);
  console.log(data, "from here");
  const planets = data.results.map((planet) => {
    return planet.name;
  });
  for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.dev/api/planets/?page=3");
oReq.send();
