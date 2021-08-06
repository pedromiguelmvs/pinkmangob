import { IsArray, IsBoolean, IsDate, IsEmail, MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MaxLength(100)
    name: string;

    @Column()
    @IsEmail()
    @MaxLength(100)
    email: string;

    @Column()
    @MaxLength(14)
    CPF: string;
    
    @Column({ nullable: true })
    @MaxLength(15)
    contact: string;

    @Column("text", { array: true })
    @IsArray()
    knowledge: string[];

    @Column()
    @IsBoolean()
    validated: boolean;

    @Column({ nullable: true, default: null })
    @IsDate()
    validatedAt: string;
    
}
