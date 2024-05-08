import { Injectable } from '@nestjs/common';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';

@Injectable()
export class NewslettersService {
  create(createNewsletterDto: CreateNewsletterDto) {
    return 'This action adds a new newsletter';
  }

  findAll() {
    return `This action returns all newsletters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsletter`;
  }

  update(id: number, updateNewsletterDto: UpdateNewsletterDto) {
    return `This action updates a #${id} newsletter`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsletter`;
  }
}
