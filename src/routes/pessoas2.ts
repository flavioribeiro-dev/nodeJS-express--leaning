import { Router } from "express";

const router = Router();

const pessoas = [
    {nome: 'Flavio', idade:90},
    {nome: 'Charlotte', idade:20},
]

router.get('/', (req, res) => {
    res.status(200).send(pessoas);
})
router.post('/', (req, res) => {
    // res.send(pessoas);
    const novaPessoa = {
        nome: req.body.nome,
        idade: req.body.idade,
    };
    pessoas.push(novaPessoa);
    res.send(pessoas)
})


router.get('/:id', (req, res) => {
    const id = +req.params.id;
    if(id>=0 && id<pessoas.length) {
        res.send(pessoas[id])
        return
    }
    res.send('pessoa não encontrada')
    return
})
router.put('/:id', (req, res) => {
    const id = +req.params.id;
    const dadosAtualizados = req.body;
    if(id>=0 && id<pessoas.length) {
        if(dadosAtualizados.nome) {
            pessoas[id].nome = dadosAtualizados.nome;
        }
        if(dadosAtualizados.idade) {
            pessoas[id].idade = +dadosAtualizados.idade;
        }
        res.status(200).send(pessoas);
    } else {
        res.status(406).send(`Registro não encontrado`);
    }
    res.send(pessoas)
})
router.delete('/:id', (req, res) => {
    const id = +req.params.id;;
    const dadosAtualizados = pessoas.filter((pessoa, i) => i !== id);

    if(dadosAtualizados !== pessoas) {
        res.status(200).send(dadosAtualizados);
    } else {
        res.status(204).send('registro não identificado')
    }
})

export default router;