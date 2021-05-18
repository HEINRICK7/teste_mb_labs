import { Request, Response} from 'express'
import { getRepository } from 'typeorm';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import * as authConfig from '../config/auth.json'

import { Estabelecimentos } from '../entity/Estabelecimento';

export class AuthUserController {
    async authenticate(req: Request, res: Response) {

        const repository = getRepository(Estabelecimentos);
        const { email, password} = req.body

        const estabelecimento = await repository.findOne({ where: { email }});

        if(!estabelecimento) {
            return res.status(401).json({message: "Usuário não autorizado!"})
        }

        const isValidPassword = await bcrypt.compare(password, estabelecimento.password);

        if(!isValidPassword) {
            return res.status(401).json({message: "senha inválida!"})
        }

        const token = jwt.sign({id: estabelecimento.id}, authConfig.secret, {
            expiresIn: 86400,
        });
        
        delete estabelecimento.password;

        return res.json({
            estabelecimento,
            token
        })
    }
}