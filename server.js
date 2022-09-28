const path = require('path');
const express = require('express');
const expresshb = require('express-handlebars');
const hb = expresshb.create({});
const app = express();
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3002
app.engine('handlebars',hb.engine);
app.set('view engine', 'handlebars')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({force: false}).then(() =>{
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
})