# SWAPI_Star_Wars_API

This web application functions like a small two page website. You can navigate between the homepage and the planets page by using the button in the main navigation; which display in the center of the page; bellow the "Star Wars Film" header. If you happen to be in the homepage, then the "home" button will be disabled; but the planets button will lead you to the planets webpage. If you happen to be in the planets webpage, then the "planets" button will be disabled; but the "home" button will lead you to the homepage.

When you navigate to either of these pages, it loads data that it fetches from a remote server through the API; which makes up almost the entire text content of both pages. You can see this by looking at the sourcecode for the index.html and the planets.html files. There is not a lot of HTML code in either; and there is even less textual content!

You may notice that these webpages are nicely centered in the web-browser. I got these and other layout ideas from the DOM Scripting by Example of the Team Tree House's Intro to Programming course; which I have been taking. Much of this website's layout came about by copying CSS that instructor Guil Hernandez put in a sample website application that he guided students like me to create, in his Tree House course.

You may also notice that my code loads fairly fast. The GraphQL query that I used to make this happen came partially from following along with instructor Andrew Probert in his Introduction to Web APIs; and partially from a sample query that I customized at the API's interactive documentation webpage. This is located at:

- https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer

Navigating this website application is pretty straight foward! You just use the two buttons upto to navigate between the two web-pages! You may have to scroll down a little bit, depending on how much information gets dynamically populated into the "Planets" page; from the API server.

## Background Information About the Code Behind the Scenes

The API that is used for this small, two page website or web application, is available in REST API format as well as in GraphQL format. So that I would not request more data than needed to populate this website, in order to refrain from slowing it down, I chose to use the GraphQL version of this API instead of the REST API version. Yet, as you can see in the REST_API.js file, I played around with the REST API version and was able to get data from the server using it. I did that before deciding to use the GraphQL version instead.

## Before moving on to GraphQL, I tested the following end-points of the REST version of this Star Wars API:

REST API Format
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

## GraphQL Version of the API

GraphQL API Format
Root:
https://swapi-graphql.netlify.app/.netlify/functions/index

Documentation: https://studio.apollographql.com/public/star-wars-swapi/variant/current/home

### Relevant Tutorials

#### Creating a multiline string in JavaScript:

- https://www.freecodecamp.org/news/javascript-multiline-string-how-to-create-multi-line-strings-in-js/

#### Completed the following Linked In Learning courses, for assistance with developing the skills I needed to complete this project. These courses both utilized video based tutorials as well as hand-on exercises.

- https://www.linkedin.com/learning/introduction-to-web-apis-22019269/what-is-an-api?u=100575394

- https://www.linkedin.com/learning/learning-git-and-github-14213624/travel-the-multiverse-with-git-and-github?u=100575394

#### Followed along with the following API call tutorial video:

##### Learn Fetch API in 6 Minutes, by Kyle, from the Web Dev Simplified channel, on YouTube.

- https://youtu.be/cuEtnrL9-H0

#### Skipped ahead on Team Tree House's Intro to Programming lesson; and completed approximately two-thirds of the DOM Scripting By Example module, to better cement DOM manipulation skills into my head; which I needed to complete this project. This course section can be found in the web-address bellow:

- https://teamtreehouse.com/library/dom-scripting-by-example

#### Used the following guide for attempting to add fonts from files through relying in @font-face, before realizing that this method did not work; and deciding to stick to Google fonts instead:

- https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css

## Performed API coding exercises to practice making calls to an API. These included:

- https://github.com/NatalyBMota/cat_API
  and
- https://github.com/NatalyBMota/Health_API
