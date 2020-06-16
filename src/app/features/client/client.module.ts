import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DummyLogger } from '@utils/logger/dummy-logger.module';
import { ClientController } from './client.controller';
import { ClientSchema } from "./client.dto";
import { ClientResolver } from './client.resolver';
import { ClientService } from './client.service';

@Module({
  imports: [
    DummyLogger,
    MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
  ],
  controllers: [ClientController],
  providers: [ClientService, ClientResolver],
})
export class ClientModule {}
