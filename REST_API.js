/*
    Root: https://www.swapi.tech/api/

    End-points not working:
    https://swapi.dev/api/films/

    
    End-points working: 
    https://www.swapi.tech/api/films
    https://www.swapi.tech/api/people
    https://www.swapi.tech/api/planets
    https://www.swapi.tech/api/species
    https://www.swapi.tech/api/starships
    https://www.swapi.tech/api/vehicles

    https://www.swapi.tech/api/planets/1/
    https://swapi.dev/api/starships/9/
    https://swapi.dev/api/species/3/
    https://www.swapi.tech/api/people/1

*/
fetch("https://www.swapi.tech/api/vehicles")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))