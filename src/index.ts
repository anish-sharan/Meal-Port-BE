import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send('🚀 Hello from your backend!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
