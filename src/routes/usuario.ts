import { Router, Request, Response } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

import { userValidator, userValidatorResult} from '../validator/userValidator'


export const routerUsuario = Router();

const usuarioCtrl = new UsuarioController();

/**
 * Serviço para criar um novo usuário
 */
routerUsuario.post('/', userValidator, userValidatorResult, usuarioCtrl.create);

/**
 * Serviço para recuperar todos usuários
 */
routerUsuario.get('/', usuarioCtrl.getUsers);

/**
 * Serviço para recuperar usuário por ID
 */
 routerUsuario.get('/:id', usuarioCtrl.getUser);

 /**
 * Serviço para atualização do usuário!
 */
  routerUsuario.put('/:id', usuarioCtrl.updateUser);

  /**
 * Serviço para remover do usuário!
 */
   routerUsuario.delete('/:id', usuarioCtrl.removeUser);