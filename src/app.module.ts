import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewslettersModule } from './modules/newsletters/newsletters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: parseInt(configService.get('database.port')),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        ssl: configService.get('database.ssl'),
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    NewslettersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
