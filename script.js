fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allFilms{films{title}}}")
.then(function(response) {
	if (response.status == 200) {
		return response.json();
	}
	else {
		console.log("Whoops! There is a problem with connecting to the API! The problem is likely an error in the URL of the request.");
	}
})
.then(function(jsonData) {
	console.log(jsonData);
})
.catch(function(error) {
	console.log("There was a problem with getting data from the API in JSON format.", error);
});