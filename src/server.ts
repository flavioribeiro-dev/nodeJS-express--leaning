import Express from 'express';
import RotasBasico from './routes/basico.js';
import RotasOutrosRetornos from './routes/outros-retornos.js';
import RotasProdutos from './routes/rotasProdutos.js';

const app = Express();

app.use(RotasBasico);
app.use(RotasOutrosRetornos);
app.use('/produtos', RotasProdutos);



app.listen( 3000, () => {
    console.log('servidor rodando')
} )