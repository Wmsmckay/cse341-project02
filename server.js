const database = require('./db/mongoDb.js');
const app = require('./app.js');
const exphbs = require('express-handlebars');

app
  .listen(process.env.PORT || 8080, () => {
    console.log('listening on port 8080');
  });
