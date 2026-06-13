import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Lista de produtos')
})

router.get('/cozinha', (req, res) => {
    const prods = [ 'colher', 'garfo', 'panela', 'detergente' ];
    res.send(prods)
})

router.get('/banheiro', (req, res) => {
    const prods = [ 'sabonete', 'escova de dente', 'shapoo' ];
    res.send(prods)
})

export default router;