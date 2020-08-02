const express = require("express");
const app = express();

const path = require("path");
const session = require("express-session");
const helpers = require("./utils/helpers");
const hbs = require("express-handlebars").create({ helpers });

const routes = require("./controllers");
const sequelize = require("./config/connection");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const PORT = process.env.PORT || 3001;
require("dotenv").config();

//set session
const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

//connect router
app.use(routes);

//db connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
