import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { NewslettersController } from './newsletters.controller';
import { organizationMiddleware } from 'src/common/middlewares/organization.middleware';

@Module({
  controllers: [NewslettersController],
  providers: [NewslettersService],
})
export class NewslettersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(organizationMiddleware)
      .forRoutes('v1/organizations/:organizationId/newsletters');
  }
}
