import { Router, Request, Response } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { Usuario } from '../entity/Usuario';


export const routerUsuario = Router();

const usuarioCtrl = new UsuarioController();

/**
 * Serviço para criar um novo usuário
 */
routerUsuario.post('/', async (req: Request, res: Response) => {
    
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.create(usuario);
    res.json(usuarioSalvo)
});
