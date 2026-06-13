import { Router } from "express";

const router = Router();

router.get('/frutas/:id', (req, res) => {
    const frutas = ['maçã', 'uva', 'limão', 'banana'];
    const id = +req.params.id;
    if(id>=0 && id<frutas.length) {
        res.status(200).send(frutas[id]);
    }
    res.sendStatus(204);    
})

router.get('/pessoa/:nome/:cor', (req, res) => {
    const pessoa = {
        nome: req.params.nome,
        corPreferida: req.params.cor
    }
    res.status(201).send(`A cor favorita de ${pessoa.nome} é ${pessoa.corPreferida}`);
})

export default router;