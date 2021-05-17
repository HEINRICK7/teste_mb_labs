import { Router, Request, Response } from 'express';

export const routerUsuario = Router();

routerUsuario.get('/', (req: Request, res: Response) => res.send('serviços de usuário'));
