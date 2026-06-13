import Express from 'express';
import RotasBasico from './routes/basico.js';
import RotasOutrosRetornos from './routes/outros-retornos.js';
import RotasProdutos from './routes/rotasProdutos.js';
import RotasStatus from './routes/status.js';
import RotasFrutas from './routes/parametros-de-rota.js'
import RotasCores from './routes/parametros-de-query.js';

const app = Express();

app.use(RotasBasico);
app.use(RotasOutrosRetornos);
app.use('/produtos', RotasProdutos);
app.use(RotasStatus);
app.use(RotasFrutas)
app.use(RotasCores);

app.listen( 3000, () => {
    console.log('servidor rodando')
} )