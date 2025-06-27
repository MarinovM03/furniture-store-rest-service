import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'It works!'} );
});

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));