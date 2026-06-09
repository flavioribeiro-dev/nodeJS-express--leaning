import Express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = Express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "pagina.html"))
})

app.get('/pdf', (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "exemplo-arquivo.pdf"));
})

app.listen( 3000, () => {
    console.log('servidor rodando')
} )