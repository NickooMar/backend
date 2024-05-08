import { Module } from '@nestjs/common';
import { AppProvider } from './app/provider.module';
import { PostgresProvider } from './database/postgres/provider.module';

@Module({
  imports: [AppProvider, PostgresProvider],
  controllers: [],
  providers: [],
})
export class ConfigProviderModule {}
