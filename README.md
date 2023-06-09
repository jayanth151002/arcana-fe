# CoffeeCan Frontend

### Overview
This project was setup using `create-react-app` with TypeScript. All the code is inside the `client` folder and follows the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles for its file structure management. State management is handled via `redux` using the `redux-toolkit` package. More detailed info on setting up and running the project resides in the `README` inside the `client` folder. Styling is done via plain `CSS`. `react-query` package is used for async data management and syncing that with frontend component updates.

### Environment Variables
These are the values you require for setting up and running the application.

REACT_APP_ALGOLIA_APP_ID=....
REACT_APP_ALGOLIA_ADMIN_API_KEY=....
REACT_APP_SERVER_URL=....
REACT_APP_AI_KEY=....
REACT_APP_ORG_ID=....
REACT_APP_PUBLIC_ALGOLIA_INDEX=....