// const { default: axios } = require("axios");

console.log("From AJAX");
// AJAX -> Asynchronous JavaScript And XML
// XML
// XHR - XML Http Request
// Using XHR

// function reqListener() {
//   const data = JSON.parse(this.responseText);
//   console.log(data, "from here");
//   const planets = data.results.map((planet) => {
//     return planet.name;
//   });
//   for (let i = 0; i < planets.length; i++) {
//     console.log(planets[i]);
//   }
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://swapi.dev/api/planets/?page=3");
// oReq.send();

// fetch

// fetch("https://swapi.dev/api/planets/?page=3")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status code error : ${response.status}`);
//     }
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// multiple request

// fetch("https://swapi.dev/api/planets/?page=3")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status code error : ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const residenceURl = data.results[0].residents[0];
//     // console.log(residenceURl);
//     return fetch(residenceURl);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// Axios <include or install axios first>
// const axios = require("axios").default;

axios.get("https://swapi.dev/api/planets/?page=3").then((res) => {
  console.log(res.data);
});

// Async returns a resoleved promise
// use throw for rejected promise

async function greet() {
  return "hello";
}

// const getPlanets = () => {
//   return axios.get("https://swapi.dev/api/planets/?page=3");
// };
// getPlanets().then((res) => {
//   console.log(res.data);
// });

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets/?page=2");
  console.log(res.data);
}
getPlanets().catch((err) => {
  console.log("In Catch !!");
  console.log(err);
});

// async function getPlanets() {
//   try {
//     const res = await axios.get("https://swapi.dev/api/planetssdf/?page=2");
//     console.log(res.data);
//   } catch (e) {
//     console.log("In Catch!");
//     console.log(e);
//   }
// }

// getPlanets();
