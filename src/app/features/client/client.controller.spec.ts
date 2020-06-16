import { Test, TestingModule } from '@nestjs/testing';
import { DummyLoggerService } from '@utils/logger/dummy-logger.service';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

describe('Client Controller', () => {
  let controller: ClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientService, DummyLoggerService],
      controllers: [ClientController],
    }).compile();

    controller = module.get<ClientController>(ClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
