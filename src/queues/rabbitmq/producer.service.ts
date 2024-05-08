import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import amqp, { ChannelWrapper } from 'amqp-connection-manager';
import { addToQueueProps } from 'src/common/interfaces/rabbitmq/producer.interface';

@Injectable()
export class ProducerService {
  private channelWrapper: ChannelWrapper;

  constructor() {
    const connection = amqp.connect([process.env.RABBITMQ_URL]);
    this.channelWrapper = connection.createChannel();
  }

  async addToQueue({ exchange, queue, routingKey, body }: addToQueueProps) {
    try {
      await this.channelWrapper.assertExchange(exchange, 'direct', {
        durable: true,
      });
      await this.channelWrapper.assertQueue(queue, { durable: true });
      await this.channelWrapper.bindQueue(queue, exchange, routingKey);
      await this.channelWrapper.publish(
        exchange,
        routingKey,
        Buffer.from(JSON.stringify(body)),
      );

      Logger.log(
        `[RABBITMQ] - Notification published to exchange: ${exchange}, queue: ${queue}, routingKey: ${routingKey}`,
      );

      return { success: true };
    } catch (error) {
      throw new HttpException(
        'Error adding mail to queue',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
