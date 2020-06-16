import { Module } from '@nestjs/common';
import { DummyLoggerService } from './dummy-logger.service';

@Module({
  providers: [DummyLoggerService],
  exports: [DummyLoggerService],
})
export class DummyLogger {}
