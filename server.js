import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const entries = [];

app.use('/', routes(entries));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
