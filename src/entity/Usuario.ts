import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import * as  bcrypt  from 'bcryptjs';

@Entity()
export class Usuario {
    constructor(nome: string, email: string, password: string){
        this.nome = nome;
        this.email = email;
        this.password = password;

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

}
