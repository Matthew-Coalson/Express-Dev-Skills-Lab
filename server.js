const express = require('express');
const app = express()
var path = require('path');
const port = 3000;
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);


app.listen(port, function() {
    console.log(`Express is listening on port ${port}.`);
});