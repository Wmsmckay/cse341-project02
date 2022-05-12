const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const exphbs = require('express-handlebars');
// const mongoose = require('mongoose')
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const { default: mongoose } = require('mongoose');
const  MongoStore = require('connect-mongo')//(session)

const app = express();

require('./config/passport')(passport);

app
  .use(express.static(path.join(__dirname, 'public')))
  .engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
  .set('view engine', '.hbs')
  .use(
    session({
      secret: 'keyboard kitty',
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
      // cookie: { secure: true }
    })
  )
  .use(passport.initialize())
  .use(passport.session())
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
