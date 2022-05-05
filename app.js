const express = require('express');
// const mongodb = require('./db/connect');

// const port = process.env.PORT || 8080;
// const makeApp = async (database) => {
  const app = express();
  const bodyParser = require('body-parser');

  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('./swagger.json');

  app
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(bodyParser.json())
    .use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    })
    .use('/', require('./routes'));

//   return app;
// };



module.exports = app


// mongodb.initDb((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`App running on port: ${port}`);
//   }
// });