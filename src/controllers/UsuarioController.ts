import { Request, Response} from 'express'
import { getManager, getRepository } from 'typeorm';
import { Usuario } from '../entity/Usuario';

export class UsuarioController {
    async create(req: Request, res: Response) {

        const repository = getRepository(Usuario);
        const { nome, email} = req.body
        const userExists = await repository.findOne({ where: { email }})

        if(userExists){
            return res.status(409).json({message: "Email já cadastrado no nosso banco de dados!"})
        }

            const usuario = repository.create({ nome, email});
            await repository.save(usuario);
            return res.json(usuario)
        
    }

    async getAll() {
        const usuarios = await getManager().find(Usuario);

        return usuarios;
    }
}