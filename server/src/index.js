import express from 'express';
import cors from 'cors';

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     next();
// });

app.use(cors());

app.use(express.json());

app.post('/users/register', (req, res) => {
    console.log(req.body);
    
    res.end();
});

app.get('/data/catalog', (req, res) => {
    res.json({});
});

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));