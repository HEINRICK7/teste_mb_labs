import { getRepository } from 'typeorm';
import { Estabelecimentos } from '../entity/Estabelecimento';
import { Request, Response } from 'express';

export class UsuarioController {

   async getEstabelecimentos( req: Request, res: Response){

    const estabelecimento = await getRepository(Estabelecimentos).find();
    return res.status(200).json(estabelecimento);
   };
   
   async create( req: Request, res: Response){

    const repository = getRepository(Estabelecimentos)
    const { name, email, cnpj, password } = req.body
    const cnpjExists = await getRepository(Estabelecimentos).findOne({where: { cnpj }})
    try {
        if(cnpjExists){
         res.status(400).json({message: 'CNPJ já cadastrado no nosso banco de dados!'})

        } 

        const estabelecimento = repository.create({ name, email, cnpj, password })
        await getRepository(Estabelecimentos).save(req.body)
        return res.status(201).json({ message: "Empresa cadastrada com sucesso!"});
        

    } catch (error) {
        res.status(500).json({message: 'error!'})
    }
    
   
   };
   
   async getEstabelecimento(req: Request, res: Response){

    const { id } = req.params
    const estabelecimento = await getRepository(Estabelecimentos).findOne(id);
    return res.json(estabelecimento)
   };
   
   async updateEstabelecimento(req: Request, res: Response){
    const { id } = req.params
    const estabelecimento = await getRepository(Estabelecimentos).update(id, req.body);

    if(estabelecimento.affected === 1){
        const estabelecimentosUpdated = await getRepository(Estabelecimentos).findOne(id);
        return res.json(estabelecimentosUpdated)
    }
    return res.status(404).json({message: 'Enterprises not found'})
   };
   
   async removeEstabelecimento(req: Request, res: Response){
    const { id } = req.params
    const estabelecimento = await getRepository(Estabelecimentos).delete(id);

    if(estabelecimento.affected === 1){
        await getRepository(Estabelecimentos).findOne(id);
        return res.json({message: 'Estabelecimento removed!'})
    }
    return res.status(404).json({message: 'nterprises not found'})
   };

}