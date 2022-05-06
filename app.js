const express = require('express');
const createError = require('http-errors');
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
  .use('/', require('./routes'))
  .use((req, res, next) => {
    // const err = new Error('not found');
    // err.status = 404;
    // next(err)
    next(createError(404, 'Not found'));
  })
  .use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
        // message: `${err.status || 500}: ${err.message}`
      }
    });
  });

//   return app;
// };

module.exports = app;

// mongodb.initDb((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`App running on port: ${port}`);
//   }
// });
