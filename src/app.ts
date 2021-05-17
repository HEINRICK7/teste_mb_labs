import * as express from 'express';

import * as cors from 'cors';

import * as morgan from 'morgan';

import { connectSeverDB } from './config/db';
import { routerUsuario } from './routes/usuario';


export const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

connectSeverDB();

app.use('/usuario', routerUsuario);
app.use('/', (req: express.Request, res: express.Response) => res.send('API MB_LABS'))