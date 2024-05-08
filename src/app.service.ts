import { Injectable } from '@nestjs/common';
type InfoType = {
  name: string;
  version: string;
  status: string;
};
@Injectable()
export class AppService {
  info(): InfoType {
    return {
      name: 'nestjs-microservices-rabbitmq',
      version: '0.0.1',
      status: 'online',
    };
  }
}
