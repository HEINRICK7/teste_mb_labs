import { Router } from 'express';
import { AuthEstabelecimentoController } from '../controllers/AuthEstabelecimentoController';
import { routerEstabelecimento } from './estabelecimento';

export const routerAuthEstabelecimento = Router();

const EstabelecimentoCtrl = new AuthEstabelecimentoController();

routerEstabelecimento.post('/', EstabelecimentoCtrl.authenticate);
