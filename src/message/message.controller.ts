import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessagePayloadDto } from './dto/message-payload';
import { ResponsePayloadDto } from './dto/response-payload';

@Controller('')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('/DevOps')
  async getUserBalance(
    @Body() message: MessagePayloadDto,
  ): Promise<ResponsePayloadDto> {
    return this.messageService.getMessage(message.to);
  }
}
