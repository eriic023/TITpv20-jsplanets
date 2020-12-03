let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus","Neptune"];
planets.push("Pluto");
console.log(planets.length);
let output = '';

for(let i = 0; i < planets.length; i++){
  console.log(i+1, planets[i]);
  output += `<li>${planets[i]}</li>`;
}

document.querySelector(".list").innerHTML =output
