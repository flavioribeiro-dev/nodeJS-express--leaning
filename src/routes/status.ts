import { Router } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs';

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/ok', (req, res) => {
    res.sendStatus(200);
    // Forma possível, mas não mais recomendada
})
router.get('/ok2', (req, res) => {
    res.status(200).send();
})

router.get('/imagem', (req, res) => {
if(fs.existsSync(path.join(__dirname, "..", "assets", "foto.html"))) {
        res.sendStatus(200)
    };
    res.sendStatus(201);
})

router.get('/tentativa', (req, res) => {
    res.status(400).send();
    // ou
    // res.status(400).send('erro 400');
})

export default router;