const express = require("express")
const keys = require('./config/keys');
const path = require('path');
const app = express()


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(keys.PORT, () => {
    console.log(`Server is running at http://localhost:${keys.PORT}`);
})