import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewslettersModule } from './modules/newsletters/newsletters.module';
import { config } from './config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './modules/users/users.module';
import { join } from 'path';

const { host, port, username, password, database } = config.typeOrmConfig;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    JwtModule.register({
      global: true,
      secret: config.appKey,
      signOptions: {
        expiresIn: '1h',
      },
    }),
    NewslettersModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
