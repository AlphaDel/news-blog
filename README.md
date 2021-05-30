# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Instructions
- Please use NodeJS version 12+ or latest.
1. Clone this repository
    ```
    git clone https://github.com/AlphaDel/news-blog.git && cd news-blog
    ```
2. Install dependencies.
    ```
    yarn
    ```
3. Create a new file `.env` following below.
    `REACT_APP_GUARDIAN_API_KEY={REPLACE_HERE}`
    > Replace `{REPLACE_HERE}` with your Guardian API key or use default `test` in case you don't have one.
4. Done, you can follow `Available Scripts` section how to lunch web application.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.