const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const controller = require('./controller/frutaCrontroler')


app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/frutas',controller.getAll)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))