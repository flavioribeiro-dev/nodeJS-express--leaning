import { Router } from "express";

const router = Router();

let pessoas = [
    {nome: 'Katia', idade: 34},
    {nome: 'Mauro', idade: 45},
    {nome: 'Otávio', idade: 14}
]

router.get('/', (req, res) => {
    res.status(200).send(pessoas);
})
router.get('/:id', (req, res) => {
    const id = +req.params.id;
    if(id >=0 && id<pessoas.length) {
        res.status(200).send(pessoas[id]);
    } else {
        res.status(204).send('pessoa não cadastrada');
    }
})
router.post('/', (req, res) => {
    const novaPessoa = {
        nome: req.body.nome,
        idade: req.body.idade
    };
    pessoas.push(novaPessoa);
    res.status(201).send(pessoas)
})
router.delete('/:id', (req, res) => {
    const id = +req.params.id;
    let dadosAtualizados = pessoas.filter( (pessoa, i) => i !== id );
    if(dadosAtualizados.length === pessoas.length) {
        res.status(406).send(pessoas);
    } else {
        pessoas = [...dadosAtualizados];
        res.status(200).send(pessoas);
    }
    return
})

export default router;