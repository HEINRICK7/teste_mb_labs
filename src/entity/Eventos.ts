import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Estabelecimentos } from './Estabelecimento';

@Entity()
export class Events {
    constructor( follow_up: string, description: string, location: string, city: string, address: string, date: string, hours: string, price: string, estabelecimento: Estabelecimentos ) {
        
        this.follow_up = follow_up;
        this.description = description;
        this.location = location;
        this.city = city;
        this.address = address;
        this.date = date;
        this.hours = hours;
        this.price = price;
        this.estabelecimento = estabelecimento;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    follow_up: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column()
    city: string;

    @Column()
    address: string;

    @Column()
    date: string;

    @Column()
    hours: string;

    @Column()
    price: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Estabelecimentos)
    estabelecimento: Estabelecimentos;

}