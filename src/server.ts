import Express from 'express';

const app = Express();


// Middleware - são funções específicas (como uma "linha de montagem") ~ todas as requisições são middlewares
app.use( (req, res, next) => {
    console.log(`Data: ${Date.now()}`);
    next();
} )
// o parâmetro NEXT é responsável por executar (automaticamente) o próximo Middleware


app.get('/', (req, res) => {
    res.send('página inicial')
})

app.get('/variavel', (req, res) => {
    let nome = 'Flavio';
    let sobrenome = 'Ribeiro';
    let idade = 90;
    res.send(`${nome} ${sobrenome} tem ${idade} anos`);
})

app.get('/variavelNumerica', (req, res) => {
    let num = 999;
    // res.send(num); -----> precisa ser enviado como JSON
    res.json(num);
})

app.get('/objeto', (req, res) => {
    let obj = { nome: 'Flavio', sobrenome: 'Ribeiro', idade: 90 }
    res.json(obj);
    // o Objeto precisa ser enviado como JSON
})

app.get('/arrayObjetos', (req, res) => {
    let carros = [
        { modelo: 'Gol', ano: 1900 },
        { modelo: 'Uno', ano: 1980 },
        { modelo: 'Celta', ano: 2000 },
        { modelo: 'Fusca', ano: 1975 }
    ]
    res.json(carros);
})



app.listen( 3000, () => {
    console.log('servidor rodando')
} )