const express = require('express');
const path    = require('path');
const app = express();

const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const handlbbars = require('./helpers/datehelper')(expressHbs);



app.engine(".hbs", handlbbars.engine);

mongoose.connect('mongodb://uzairkhan:uzairkhan687@ds349857.mlab.com:49857/blood',{useNewUrlParser:true});

app.set('view engine', '.hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));


require('./routes/indexRouter')(app);

app.listen('5000', () => {
    console.log("server is running at port 5000");
});