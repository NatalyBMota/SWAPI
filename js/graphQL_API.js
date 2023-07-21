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
	const mainDiv = document.querySelector('.main');
	const filmsArr = jsonData.data.allFilms.films;
	console.log(filmsArr[0]);

	for (let i = 0; i < filmsArr.length; i++) {
		const filmTitle = filmsArr[i].title;
		const h2 = document.createElement('h2');
		h2.innerText = `${filmTitle}`;
		mainDiv.appendChild(h2);

		const director = filmsArr[i].director;
		const h3 = document.createElement('h3');
		const directorSpan = document.createElement('span');
		directorSpan.innerText = "Director: ";
		const textNodeWithDirector = document.createTextNode(`${director}`);
		h3.appendChild(directorSpan);
		h3.appendChild(textNodeWithDirector);
		h3.style.fontWeight = 'normal';
		directorSpan.style.fontWeight = 'bold';

		mainDiv.appendChild(h3);
		const releaseDate = filmsArr[i].releaseDate;
		const convertedReleaseDate = convertToFriendlyDateFormat(releaseDate);
		const h4 = document.createElement('h4');
		h4.style.fontWeight = 400;
		const releaseDateSpan = document.createElement('span');
		releaseDateSpan.innerText = "Release Date: ";
		const txtNodeWithReleaseDate = document.createTextNode(`${convertedReleaseDate}`);
		releaseDateSpan.appendChild(txtNodeWithReleaseDate);
		h4.appendChild(releaseDateSpan);
		//h4.innerHTML = `${releaseDate}`;
		mainDiv.appendChild(h4);
		releaseDateSpan.style.fontWeight = 'bold';
		
		
	}
	
})
.catch(function(error) {
	console.log("There was a problem with getting data from the API in JSON format.", error);
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