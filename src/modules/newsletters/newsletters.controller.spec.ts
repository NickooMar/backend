import { Test, TestingModule } from '@nestjs/testing';
import { NewslettersController } from './newsletters.controller';
import { NewslettersService } from './newsletters.service';

describe('NewslettersController', () => {
  let controller: NewslettersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewslettersController],
      providers: [NewslettersService],
    }).compile();

    controller = module.get<NewslettersController>(NewslettersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
