import Server from 'gas-client';

const { PORT } = process.env;

const server = new Server({
  // this is necessary for local development but will be ignored in production
  allowedDevelopmentDomains: `https://localhost:${PORT}`,
});

//This object, thanks to gas-client package, helps to more easily call server-side functions using promises.
// See https://www.npmjs.com/package/gas-client for more info
export default server;
