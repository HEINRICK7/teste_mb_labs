import * as express from 'express';

import * as cors from 'cors';

import * as morgan from 'morgan';

import { connectSeverDB } from './config/db';
import { routerUsuario } from './routes/usuario';
import { routerEstabelecimento } from './routes/estabelecimento';
import { routerAuthUser } from './routes/auth';


export const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

connectSeverDB();

app.use('/usuario', routerUsuario);
app.use('/usuario', routerUsuario);
app.use('/usuario', routerUsuario);
app.use('/usuario', routerUsuario);
app.use('/usuarios', routerUsuario);


app.use('/estabelecimento', routerEstabelecimento);
app.use('/estabelecimento', routerEstabelecimento);
app.use('/estabelecimento', routerEstabelecimento);
app.use('/estabelecimento', routerEstabelecimento);
app.use('/estabelecimentos', routerEstabelecimento);

app.use('/auth', routerAuthUser)