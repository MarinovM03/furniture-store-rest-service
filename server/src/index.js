import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes.js';

mongoose.connect('mongodb://localhost:27017', { dbName: 'furniture-store' })
    .then(() => console.log('Successfully connected to DB!'))
    .catch((err) => console.log('Cannot connect to DB: ', err.message));

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     next();
// });

app.use(cors());

app.use(express.json());

app.use(routes);

app.get('/data/catalog', (req, res) => {
    res.json([]);
});

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));