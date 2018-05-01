## Treehouse Fullstack Javascript Techdegree, Project #9
# Create a Gallery App with React
## by Ole Petter Baugerød Stokke

Requires a Config.js-file with API credencials:
```javascript
const apiKey = 'XXX';
export default apiKey;
```

From the Treehouse instructions:

In this project, you'll build an image gallery using React and the Flickr API. After creating the project with create-react-app, you will build the gallery components, write the CSS and set up routing.

* (Recommended) Use the flickr.photos.search endpoint/method
* Display at least 3 links that return a list of photos matching some criteria. For example: Dogs, Cats and Coffee.
* Include a "Search" link that includes a search field to let users search for photos.
* Use React Router to set up routes for each navigation link in the directory app.
* You can use the Fetch API or a tool like Axios to fetch data from the Flickr API.
* You should do all data fetching from a container component that passes the data down to presentational components responsible for displaying images

## Project Instructions
* Set up your project with create-react-app.
* Build your app components according to the provided mockup. Most components should be stateless functional components that focus on the UI rather than behavior. You’ll need:
* A container component that takes in a keyword and api key as props, and fetches the photos and other required information from the API
* A navigation menu component
* A component for each category you wish to display. For example, a Sunset component, a Flowers component, and a Clouds component.
* Update the CSS to style the app in a way that resembles the mockup.
* Install React Router and set up your and components.
* Get a Flickr API key
* You’ll import your API into your application and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once. When you submit this project for grading, your project reviewer will create their own config.js file and use their own API key to run the project.
* Fetch the data from Flickr API. Make sure data fetching and state is managed by a higher-level “container” component. 
* Make sure each image gets a unique "key" prop. There should be no console warnings regarding unique "key" props. The title of each image list should be displayed dynamically via "props".
* Add search field feature. The field should be visible only in the 'Search' route.

## Extra Credit
To get an "exceeds" rating, you can expand on the project in the following ways:
* Add a loading indicator that displays each time the app fetches new data.
* Include a 404-like error route that displays when a URL path does not match a route.
* If no matches are found by the search, include a message to tell the user there are no matches.