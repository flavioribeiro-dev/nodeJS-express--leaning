import Express from 'express';
import RotasBasico from './routes/basico.js';
import RotasOutrosRetornos from './routes/outros-retornos.js';

const app = Express();

app.use(RotasBasico);
app.use(RotasOutrosRetornos);




app.listen( 3000, () => {
    console.log('servidor rodando')
} )