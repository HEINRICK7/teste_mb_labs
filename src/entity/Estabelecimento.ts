import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import * as  bcrypt  from 'bcryptjs';

@Entity()
export class Estabelecimentos {
    constructor(id: number, name: string, email: string, password: string, cnpj: string ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cnpj = cnpj;
        this.password = password;
    }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cnpj: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }


}
