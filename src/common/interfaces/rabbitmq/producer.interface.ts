export interface addToQueueProps {
  exchange: string;
  queue: string;
  routingKey: string;
  body: any;
}
