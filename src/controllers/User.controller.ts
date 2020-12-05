import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UserService } from "src/services/User.service";
import { User } from '../entities/User.entity'

// le pasamos el nombre del path
@Controller('users')
export class UserController {

    constructor(private service: UserService){

    }

    @Get()
    public findAll() {
        return this.service.getAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id) {
        return this.service.getById(id);
    }

    @Post()
    public save(@Body() user: User) {
        return this.service.save(user);
    }

    @Patch(':id')
    public async update(@Param('id', ParseIntPipe) id, @Body() user: User): Promise<User> {
        const toUpdate = await this.service.update(id, user);

        return toUpdate;
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number) {
        this.service.removeById(id);
    }
    
}