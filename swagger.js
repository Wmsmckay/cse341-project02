const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Events API',
    description: 'API for creating events and registering to attend them.',
    version: "1.0.3"
  },
  // host: 'cse341-project02-mw.herokuapp.com',
  host: 'localhost:8080',
  schemes: ['http'],
  tags: [{
      name: 'Users',
      description: 'Endpoints for Users'
    },
    {
      name: 'Events',
      description: 'Endpoints for Events'
    },
    {
      name: 'Authenticated Users',
      description: 'Endpoints for Authenticated Users'
    }
    
  ],
  // securityDefinitions: {
  //   oAuth2: {
  //     type: 'oauth2',
  //     authorizationUrl: 'https://cse341-project02-mw.herokuapp.com/auth/google',
  //     // flow: 'implicit',
  //     // scopes: {
  //     //   // read_pets: 'read your pets',
  //     //   // write_pets: 'modify pets in your account'
  //     // }
  //   },
  //   // api_key: {
  //   //   type: "apiKey",
  //   //   name:"api_key",
  //   //   in: "header",
  //   //   description: "An API key that hasn't been implemented"
  //   // }
  // }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);