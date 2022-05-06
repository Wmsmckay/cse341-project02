const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  // host: 'cse341-project02-mw.herokuapp.com',
  host: 'localhost:8080',
  schemes: ['http'],
  // tags: [
  //   {
  //     name: 'Users',
  //     description: 'Endpoints for Users'
  //   },
  //   {
  //     name: "Events",
  //     description: "Endpoints for Events"
  //   }
  // ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
// .then(() => {
//     require('./index.js');           // Your project's root file
// })