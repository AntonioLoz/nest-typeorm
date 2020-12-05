import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module'
import { UsersModule } from './modules/users.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    UsersModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
