// importing required modules
const path = require('path'); // file and directory 
const express = require('express'); // express frame work
const session = require('express-session'); // manages user's sessions
const exphbs = require('express-handlebars'); // handlebars templating engine
const routes = require('./controllers'); // imports routes 
const helpers = require('./utils/helpers'); // util functions

const sequelize = require('./config/connection'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// session configuartion 
const sess = {

    secret: 'Super secret secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })

  };

// use session middleware
app.use(session(sess));

// handlebars setup
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// use the routes defined in the './controllers' directory
app.use(routes);

// synchronize Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
    
    // start the Express server and listen on the specified port
    app.listen(PORT, () => console.log('Now listening'));

});