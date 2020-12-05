import { IsString, MaxLength, MinLength } from "class-validator";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:30 })
    @MinLength(1)
    @MaxLength(30)
    @IsString()
    username: string;

    @Column({ length:60 })
    @MinLength(6)
    @MaxLength(60)
    @IsString()
    password: string;

    @Column()
    email: string;

}