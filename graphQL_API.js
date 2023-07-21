/*
let queryString = `{
	allFilms {
		films {
			title
		}
	}
}`;

There must be a space after each property, even if they are each in a separate line. Otherwise, the request won't work and we will get an error.
*/

let queryString = `{
	allFilms {
		films {
			title 
			director 
			releaseDate 
			speciesConnection {
				species {
				  name 
				  classification 
				  homeworld {
					name
				  }
				}
			}
		}
	}
}`;

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
	console.log(jsonData.data.allFilms.films[0].title);
	const mainDiv = document.querySelector('.main');
	const filmsArr = jsonData.data.allFilms.films
	
	for (let i = 0; i < filmsArr.length; i++) {
		const filmTitle = filmsArr[i].title;
		const h2 = document.createElement('h2');
		h2.innerText = `${filmTitle}`;
		mainDiv.appendChild(h2);
	}
	
})
.catch(function(error) {
	console.log("There was a problem with getting data from the API in JSON format.", error);
});