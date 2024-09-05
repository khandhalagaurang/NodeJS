const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/service', (req, res) => {
    res.render('service');
});
app.get('/form', (req, res) => {
    res.render('form');
});
app.listen(7000, () => {
    console.log(`server stared on http://localhost:7000/`)
})