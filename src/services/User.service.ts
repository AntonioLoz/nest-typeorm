import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private repository: Repository<User>){

    }

    public async getAll(): Promise<Array<User>> {

        return this.repository.find();
    }

    public async getById(id: number): Promise<User> {
        return this.repository.findOne(id);
    }

    public async save(user: User) {
        this.repository.save(user);
    }

    public async getByUsername (name: string) {
        return this.repository.findOne({ where: {username: name}});
    }

    public async removeById(id: number) {
        await this.repository.delete(id);
    }

    public async update(id: number, user: User): Promise<User> {
        const toUpdate = await this.repository.findOne(id);

        if(!toUpdate) {
            throw new NotFoundException('User not found');
        }

        toUpdate.username = user.username;
        toUpdate.email = user.email;
        toUpdate.password = user.password;

        await toUpdate.save();
        return toUpdate;
    }

}