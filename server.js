const database = require('./db/mongoDb.js');
const app = require('./app.js');
// const engine = require()
const exphbs = require('express-handlebars');

app
  // .engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs' }))
  // .set('view engine', '.hbs')
  // .makeApp(database)
  .listen(process.env.PORT || 8080, () => {
    console.log('listening on port 8080');
  });
