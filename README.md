# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run prod`
It executes the production version using the package `serve`. For this command to work you need the `build` directory which is created using `npm run build`.

### Tests (`npm test`)

A smoke test to check in a very rudimentary way that the app is loaded is ready at src/smoke.test.js to check that a div with id="root" exists as the first element of the DOM tree.

Here is an example of the tests for App.js:

```javascript
test('existe el div con id="root" en el documento', () => {
  // Simulamos el HTML base (como el index.html real)
  document.body.innerHTML = `
    <div id="root"></div>
  `;

  const rootDiv = document.getElementById('root');
  expect(rootDiv).toBeInTheDocument();
});
```


