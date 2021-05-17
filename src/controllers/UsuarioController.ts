import { getManager } from 'typeorm';
import { Usuario } from '../entity/Usuario';

export class UsuarioController {
    async create(usuario: Usuario) {
        const usuarioSalvo = await getManager().save(usuario);

        return usuarioSalvo
    }
}