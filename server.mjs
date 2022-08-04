import express from 'express';
const app = express();
const port = 3000;

app.get('/home', (res,req) => {
    res.send('This is home page!')
})
app.get('/profile', (res,req) => {
    res.send('This is profile page!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})