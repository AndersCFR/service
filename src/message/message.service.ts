import { Injectable } from '@nestjs/common';
import { ResponsePayloadDto } from './dto/response-payload';

@Injectable()
export class MessageService {
  async getMessage(to: string): Promise<ResponsePayloadDto> {
    const returnMessage = `Hello ${to} your message will be send`;
    return new ResponsePayloadDto({
      message: returnMessage,
    });
  }
}
