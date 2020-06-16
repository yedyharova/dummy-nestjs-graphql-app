import { Test, TestingModule } from '@nestjs/testing';
import { DummyLoggerService } from "@utils/logger/dummy-logger.service";
import { ClientService } from './client.service';


describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DummyLoggerService, ClientService],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
