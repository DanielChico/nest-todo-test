import { Module } from '@nestjs/common';
import { UsersService, UsersV2Service } from './users.service';
import { UsersController, UsersV2Controller } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [UsersController, UsersV2Controller],
  providers: [UsersService, PrismaService, UsersV2Service],
})
export class UsersModule {}
