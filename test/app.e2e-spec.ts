import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const mockMessage = {
    message: 'This is a test',
    to: 'Juan Perez',
    from: 'Rita Asturia',
    timeTolifeSec: 45,
  };

  it('/DevOps (POST)', () => {
    return request(app.getHttpServer())
      .post('/DevOps')
      .send(mockMessage)
      .expect(201)
      .expect({
        message: 'Hello Juan Perez your message will be send',
      });
  });
});
