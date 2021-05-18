import { Router } from 'express';
import { EstabelecimentoController } from '../controllers/EstabelecimentoController';

import { userValidator, userValidatorResult} from '../validator/userValidator'


export const routerEstabelecimento= Router();

const EstabelecimentoCtrl = new EstabelecimentoController();

/**
 * Serviço para criar um novo usuário
 */
routerEstabelecimento.post('/', userValidator, userValidatorResult, EstabelecimentoCtrl.create);

/**
 * Serviço para recuperar todos usuários
 */
routerEstabelecimento.get('/', EstabelecimentoCtrl.getEstabelecimentos);

/**
 * Serviço para recuperar usuário por ID
 */
 routerEstabelecimento.get('/:id', EstabelecimentoCtrl.getEstabelecimento);

 /**
 * Serviço para atualização do usuário!
 */
  routerEstabelecimento.put('/:id', EstabelecimentoCtrl.updateEstabelecimento);

  /**
 * Serviço para remover do usuário!
 */
   routerEstabelecimento.delete('/:id', EstabelecimentoCtrl.removeEstabelecimento);