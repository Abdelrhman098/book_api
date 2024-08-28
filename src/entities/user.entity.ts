import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import{Review} from './review.entity';
@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
     
    @OneToMany(()=>Review,(review) => review.user)
    reviews:Review[];

}