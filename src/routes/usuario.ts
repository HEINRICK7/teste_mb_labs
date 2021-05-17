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
routerUsuario.get('/', async(req: Request, res: Response) => {

    const usuarios = await usuarioCtrl.getAll();
    res.json(usuarios);
});