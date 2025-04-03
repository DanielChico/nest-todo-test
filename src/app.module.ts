import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: __dirname + '/db/database.db',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
