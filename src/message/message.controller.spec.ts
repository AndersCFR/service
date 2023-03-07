import { Test } from '@nestjs/testing';
import { MessagePayloadDto } from './dto/message-payload';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

describe('MessageController', () => {
  let controller: MessageController;
  let service: MessageService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();

    service = moduleRef.get<MessageService>(MessageService);
    controller = moduleRef.get<MessageController>(MessageController);
  });

  it('it should be the right ', async () => {
    const result = 'Hello Juan Perez your message will be send';
    const testPayload = new MessagePayloadDto({
      message: 'This is a test',
      to: 'Juan Perez',
      from: 'Rita Asturia',
      timeToLifeSec: 45,
    });

    expect(
      await (
        await controller.getUserBalance(new MessagePayloadDto(testPayload))
      ).message,
    ).toBe(result);
  });
});
