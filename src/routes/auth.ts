import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';

export const routerAuthUser = Router();

const authCtrl = new AuthUserController();

routerAuthUser.post('/', authCtrl.authenticate);
