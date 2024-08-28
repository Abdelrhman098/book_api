import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import{User}from './user.entity';
import{Book}from'./book.entity';
@Entity()
export class Review{

 @PrimaryGeneratedColumn()
 id:number;

 @Column()
 comment:string;

 @Column()
 rating:number;

 @ManyToOne(()=>User,(user)=>user.reviews)
 user:User

 @ManyToOne(()=>Book,(book)=>book.reviews)
 book:Book 
}