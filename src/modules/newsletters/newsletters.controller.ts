import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { NewslettersService } from './newsletters.service';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('organizations/:organizationId/newsletters')
@UseGuards(AuthGuard)
export class NewslettersController {
  constructor(private readonly newslettersService: NewslettersService) {}

  @Post()
  create(@Body() createNewsletterDto: CreateNewsletterDto) {
    return this.newslettersService.create(createNewsletterDto);
  }

  @Get()
  findAll(
    @Param('organizationId') organizationId: string,
    @Req() request: Request,
    @Res() res: Response,
  ) {
    return this.newslettersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newslettersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNewsletterDto: UpdateNewsletterDto,
  ) {
    return this.newslettersService.update(+id, updateNewsletterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newslettersService.remove(+id);
  }
}
