# Client (our React code)

This directory is where we store the source code for our client-side React apps.

We can have multiple directories in here. For each separate React app, just configure our webpack configuration to generate a separate bundle for each React app (see next section).


## Requirements

Each React app will need:
- an entrypoint, usually a file named `index.js`, that loads the app
- an HTML file that acts as a template, in which the bundled React app is loaded

You'll need to declare the following in [webpack.config.js](../../webpack.config.js):
- **name**: just a name to print in the webpack console, e.g. 'CLIENT - Demo Bootsrap'
- **entry**: the path to the entry point for the app, e.g. './src/client/demo-bootstrap/index.js'
- **filename**: the name of the html file that is generated. The server code will reference this filename to load the app into a dialog window. E.g. 'demo-bootstrap'
- **template**: the path to the HTML template for the app, e.g. './src/client/demo-bootstrap/index.html'


### Adding or removing an entrypoint
Your app or use case may only require a single entrypoint (SPA: Single Page Application), or you may want to add more than are included in the sample app.

To edit the entrypoints, you will need to:

1. Create or remove the entrypoint directories in the client source code. For instance, you can remove `./src/client/demo-bootstrap` altogether, or copy it and modify the source code. See above [requirements](#requirements).

2. Modify the server-side code to load the correct page according to the request received in doGet or doPost:
    - [webapp file](../server/sebapp.js)
    - [index file](../server/index.js)

3. Modify the `clientEntrypoints` config in the [webpack config file](../../webpack.config.js).
