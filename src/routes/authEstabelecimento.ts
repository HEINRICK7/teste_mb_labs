import { Router } from 'express';
import { AuthEstabelecimentoController } from '../controllers/AuthEstabelecimentoController';

export const routerAuthEstabelecimento = Router();

const EstabelecimentoCtrl = new AuthEstabelecimentoController();

routerAuthEstabelecimento.post('/', EstabelecimentoCtrl.authenticate);
