import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    res.send('página inicial')
})

app.listen( 3000, () => {
    console.log('servidor rodando')
} )