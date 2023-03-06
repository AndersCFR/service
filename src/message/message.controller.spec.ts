import { Test, TestingModule } from '@nestjs/testing';
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

  
  it('should return an array of cats', async () => {
      const result = ['Hello Juan Perez your message will be send'];
      //jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
      //expect(await controller.findAll()).toBe(result);
  });

});
