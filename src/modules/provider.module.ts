import { Module } from '@nestjs/common';
import { NewslettersModule } from './newsletters/newsletters.module';

@Module({
  imports: [NewslettersModule],
  controllers: [],
  providers: [],
})
export class ModulesProvider {}
