# Chris' Movie Searcher

For this project, I used Redux for state management and Redux Saga middleware to send async requests to Omdb.
I found Sagas initially difficult to learn to use but its generator functions makes sense after reading the API. A simpler solution would be to just to use the Fetch API, pass it as a prop to Search component and dispatch an action with a response payload.

Auth0 was quite quick to integrate and to create protected routes.

## How to run

- `cd` into root folder and run `npm install` to install dependencies.
- Run `npm start` and go to `http://localhost:3000`.

Libraries used: React, Auth0, React-Router, Redux, Redux-Saga, Material UI

Login to check your Auth0 portfolio.
