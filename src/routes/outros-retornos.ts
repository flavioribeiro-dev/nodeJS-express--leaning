import { Router } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/variavel', (req, res) => {
    let nome = 'Flavio';
    let sobrenome = 'Ribeiro';
    let idade = 90;
    res.send(`${nome} ${sobrenome} tem ${idade} anos`);
})

router.get('/variavelNumerica', (req, res) => {
    let num = 999;
    // res.send(num); -----> precisa ser enviado como JSON
    res.json(num);
})

router.get('/objeto', (req, res) => {
    let obj = { nome: 'Flavio', sobrenome: 'Ribeiro', idade: 90 }
    res.json(obj);
    // o Objeto precisa ser enviado como JSON
})

router.get('/arrayObjetos', (req, res) => {
    let carros = [
        { modelo: 'Gol', ano: 1900 },
        { modelo: 'Uno', ano: 1980 },
        { modelo: 'Celta', ano: 2000 },
        { modelo: 'Fusca', ano: 1975 }
    ]
    res.json(carros);
})

router.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "pagina.html"));
})

router.get('/pdf', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "arquivo.pdf"));
})

export default router;