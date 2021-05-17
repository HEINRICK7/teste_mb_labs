import { Request, Response} from 'express'
import { getManager, getRepository } from 'typeorm';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import * as authConfig from '../config/auth.json'

import { Usuario } from '../entity/Usuario';

export class AuthUserController {
    async create(req: Request, res: Response) {

        const repository = getRepository(Usuario);
        const { email, password} = req.body

        const user = await repository.findOne({ where: { email }});

        if(!user) {
            return res.status(401).json({message: "Usuaário não autorizado!"})
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return res.status(401).json({message: "senha inválida!"})
        }

        const token = jwt.sign({id: user.id}, authConfig.secret, {
            expiresIn: 86400,
        });
        
        return res.json({
            user,
            token
        })
    }

    async getAll() {
        const usuarios = await getManager().find(Usuario);

        return usuarios;
    }
}