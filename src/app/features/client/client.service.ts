import { FeatureService } from '@base/feature.servise';
import { Injectable, Optional } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DummyLoggerService } from '@utils/logger/dummy-logger.service';
import { Model } from 'mongoose';
import { ClientEntity } from './client.interface';

@Injectable()
export class ClientService extends FeatureService<ClientEntity> {
  constructor(
    protected readonly dummyLogger: DummyLoggerService,
    @InjectModel('Client')
    @Optional()
    private clientModel?: Model<ClientEntity>,
  ) {
    super(dummyLogger, clientModel);
  }

  create(clientDto: ClientEntity): Promise<ClientEntity> {
    clientDto.signUpDate = new Date();
    return super.create(clientDto);
  }
}
