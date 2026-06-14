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

router.put('/:id', (req, res) => {
    const id = +req.params.id;
    const dadosAtualizados = req.body;
    if(id>=0 && id<pessoas.length) {
        if(dadosAtualizados.nome) {
            pessoas[id].nome = dadosAtualizados.nome;
        }
    }



    // console.log(id, dadosAtualizados);

    // const id = +req.params.id;
    // const dadosAtualizados = req.body;
    // if(id>=0 && id<pessoas.length) {
    //     if(dadosAtualizados.nome) {
    //         pessoas[id].nome = dadosAtualizados.nome;
    //     }
    // } else {
    //     res.status(406).send(pessoas)
    // }
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
    console.log(pessoas);
    return
})

export default router;