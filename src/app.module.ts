import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigProviderModule } from './config/config.module';
import { ModulesProvider } from './modules/provider.module';

@Module({
  imports: [ConfigProviderModule, ModulesProvider],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
