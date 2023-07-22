/*
	There must be a space after each property in the graphQL API call, even if they are each in a separate line. Otherwise, the request won't work and we will get an error.
*/

let queryString = `{
	allPlanets {
		planets { 
			diameter 
			name 
			orbitalPeriod 
			population 
			rotationPeriod
		}
	}
}`;
function populateWebPageWithServerData(jsonData) {
	const mainDiv = document.querySelector('.main');
	
	const planetsArr = jsonData.data.allPlanets.planets;
	for (let i = 0; i < planetsArr.length; i++) {
		const planetName = planetsArr[i].name;
		let divPlanet = document.createElement('div');
		divPlanet.className = "individualElement";
		mainDiv.appendChild(divPlanet);
		const header = document.createElement('header');
		const h3 = document.createElement('h3');
		h3.innerText = `${planetName}`;
		header.appendChild(h3);
		divPlanet.appendChild(header);

		const population = planetsArr[i].population;	
		const h4 = document.createElement('h4');
		const populationSpan = document.createElement('span');
		populationSpan.innerText = "Population: ";
		const textNodeWithPopulation = document.createTextNode(`${population}`);
		h4.appendChild(populationSpan);
		h4.appendChild(textNodeWithPopulation);
		divPlanet.appendChild(h4);

		const planetDiameter = planetsArr[i].diameter;
		const h4PlanetDiameter = document.createElement('h4');
		const planetDiameterSpan = document.createElement('span');
		planetDiameterSpan.innerText = "Planet Diameter: ";
		const txtNodeWithPlanetDiameter = document.createTextNode(`${planetDiameter}`);
		planetDiameterSpan.appendChild(txtNodeWithPlanetDiameter);
		h4PlanetDiameter.appendChild(planetDiameterSpan);
		divPlanet.appendChild(h4PlanetDiameter);

		const orbitalPeriod = planetsArr[i].orbitalPeriod;
		const h4OrbitalPeriod = document.createElement('h4');
		const orbitalPeriodSpan = document.createElement('span');
		orbitalPeriodSpan.innerText = "Orbital Period: ";
		const txtNodeWithOrbitalPeriod = document.createTextNode(`${orbitalPeriod}`);
		orbitalPeriodSpan.appendChild(txtNodeWithOrbitalPeriod);
		h4OrbitalPeriod.appendChild(orbitalPeriodSpan);
		divPlanet.appendChild(h4OrbitalPeriod);

		const rotationalPeriod = planetsArr[i].rotationPeriod;
		const h4RotationalPeriod = document.createElement('h4');
		const rotationalPeriodSpan = document.createElement('span');
		rotationalPeriodSpan.innerText = "Rotational Period: ";
		const txtNodeWithRotationalPeriod = document.createTextNode(`${rotationalPeriod}`);
		rotationalPeriodSpan.appendChild(txtNodeWithRotationalPeriod);
		h4RotationalPeriod.appendChild(rotationalPeriodSpan);
		divPlanet.appendChild(h4RotationalPeriod);	
	}
}

fetch(`https://swapi-graphql.netlify.app/.netlify/functions/index?query=${queryString}`)
.then(function(response) {
	if (response.status == 200) {
		return response.json();
	}
	else {
		console.log("Whoops! There is a problem with connecting to the API! The problem is likely an error in the URL of the request.");
	}
})
.then(function(jsonData) {
	populateWebPageWithServerData(jsonData);	
})
.catch(function(error) {
	console.log("There was a problem with getting data from the API in JSON format.");
});