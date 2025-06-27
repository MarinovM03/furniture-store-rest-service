import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     next();
// });

app.use(cors());

app.use(express.json());

app.use(routes);

app.get('/data/catalog', (req, res) => {
    res.json({});
});

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));