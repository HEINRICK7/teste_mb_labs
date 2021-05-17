import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}
