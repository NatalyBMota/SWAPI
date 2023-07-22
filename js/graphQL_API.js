/*
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
				}
			}
		}
	}
}`;

function populateWebPageWithServerData(jsonData) {
	const mainDiv = document.querySelector('.main');
	const filmsArr = jsonData.data.allFilms.films;

	for (let i = 0; i < filmsArr.length; i++) {
		let divFilm = document.createElement('div');
		divFilm.className = "individualElement";
		mainDiv.appendChild(divFilm);
		const filmTitle = filmsArr[i].title;
		const header = document.createElement('header');
		const h3 = document.createElement('h3');
		h3.innerText = `${filmTitle}`;
		header.appendChild(h3);
		divFilm.appendChild(header);

		const director = filmsArr[i].director;
		const directorSpan = document.createElement('span');
		directorSpan.innerText = "Director: ";
		const h4 = document.createElement('h4');
		const textNodeWithDirector = document.createTextNode(`${director}`);
		h4.appendChild(directorSpan);
		h4.appendChild(textNodeWithDirector);
		divFilm.appendChild(h4);

		const releaseDate = filmsArr[i].releaseDate;
		const convertedReleaseDate = convertToFriendlyDateFormat(releaseDate);
		const h5 = document.createElement('h5');
		const releaseDateSpan = document.createElement('span');
		releaseDateSpan.innerText = "Release Date: ";
		const txtNodeWithReleaseDate = document.createTextNode(`${convertedReleaseDate}`);
		releaseDateSpan.appendChild(txtNodeWithReleaseDate);
		h5.appendChild(releaseDateSpan);
		divFilm.appendChild(h5);

		const speciesArr = filmsArr[i].speciesConnection.species;
		let ul = document.createElement('ul');
		let h5Species = document.createElement('h5');
		h5Species.innerText = "Species:";
		divFilm.appendChild(h5Species);
		divFilm.appendChild(ul);
		for (let i = 0; i < speciesArr.length; i++) {
			const species = speciesArr[i];
			const speciesName = species.name;
			let li = document.createElement('li');

			let spanSpeciesName = document.createElement('span');		
			spanSpeciesName.innerText = "Name: ";

			li.appendChild(spanSpeciesName);
			ul.appendChild(li);
			const txtNodeWithSpeciesName = document.createTextNode(`${speciesName}`);
			li.appendChild(txtNodeWithSpeciesName);

			const classification = species.classification;
			let ulClassification = document.createElement('ul');
			let liClassification = document.createElement('li');

			let spanClassification = document.createElement('span');
			spanClassification.innerText = "Classification: ";

			liClassification.appendChild(spanClassification);
			let txtNodeClassification = document.createTextNode(`${classification}`);
			liClassification.appendChild(txtNodeClassification);
			li.appendChild(ulClassification);
			ulClassification.appendChild(liClassification);
		}
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

/*
function convertToFriendlyDateFormat(date) {
	const dateArr = date.split("-");
	const convertedDate = `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
	return convertedDate;
}
*/

function convertToFriendlyDateFormat(date) {
	const dateArr = date.split("-");
	let month = dateArr[1];
	month = +month;
	let monthSpelledOut = "";
	
	switch (month) {
		case 1:
			monthSpelledOut = "January";
			break;
		case 2:
			monthSpelledOut = "February";
			break;
		case 3:
			monthSpelledOut = "March";
			break;
		case 4:
			monthSpelledOut = "April";
			break;
		case 5:
			monthSpelledOut = "May";
			break;
		case 6:
			monthSpelledOut = "June";
			break;
		case 7:
			monthSpelledOut = "July";
			break;
		case 8:
			monthSpelledOut = "August";
			break;
		case 9:
			monthSpelledOut = "September";
			break;
		case 10:
			monthSpelledOut = "October";
			break;
		case 11:
			monthSpelledOut = "November";
			break;
		case 12:
			monthSpelledOut = "December";
			break;
	}
	
	const convertedDate = `${monthSpelledOut} ${dateArr[2]}, ${dateArr[0]}`;
	return convertedDate;
}