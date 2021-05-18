import { Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { Usuario } from '../entity/Usuario';

export class UsuarioController {

    async create(req: Request, res: Response) {

        const repository = getRepository(Usuario);
        const { nome, email, password} = req.body
        const userExists = await repository.findOne({ where: { email }})

        if(userExists){
            return res.status(409).json({message: "Email já cadastrado no nosso banco de dados!"})
        }

            const usuario = repository.create({ nome, email, password});
            await repository.save(usuario);
            return res.json(usuario)
        
    }

    async getUsers( req: Request, res: Response){

        const usuarios = await getRepository(Usuario).find();
        return res.status(200).json(usuarios);
    };

    async getUser(req: Request, res: Response){

        const { id } = req.params
        const usuario = await getRepository(Usuario).findOne(id);
        if(!usuario){
            return res.status(400).json({message: "Não foi possivel encontrar um usuário!"})
        }
        return res.json(usuario)
    };

    async updateUser(req: Request, res: Response){
        const { id } = req.params
        const usuario = await getRepository(Usuario).update(id, req.body);
    
        if(usuario.affected === 1){
            const userUpdated = await getRepository(Usuario).findOne(id);
            return res.json(userUpdated)
        }
        return res.status(404).json({message: 'User not found'})
    };

    async removeUser(req: Request, res: Response) {
        const { id } = req.params
        const usuario = await getRepository(Usuario).delete(id);
    
        if(usuario.affected === 1){
            await getRepository(Usuario).findOne(id);
            return res.json({message: 'Usuario removed!'})
        }
        return res.status(404).json({message: 'Usuario not found'})
    }
    

}