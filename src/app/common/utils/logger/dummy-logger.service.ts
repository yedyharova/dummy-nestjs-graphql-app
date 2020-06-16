import { Injectable, Logger, LoggerService, Scope } from '@nestjs/common';

//https://docs.nestjs.com/techniques/logger#using-the-logger-for-application-logging
@Injectable( { scope: Scope.TRANSIENT } )
export class DummyLoggerService extends Logger implements LoggerService {
  constructor() {
    super();
  }
  log(message: string) {
    /* your implementation */
    console.log(message)
    super.log(message);
  }
  error(message: string, trace: string) {
    /* your implementation */
    super.error(message, trace);
  }
  warn(message: string) {
    /* your implementation */
    super.warn(message);
  }
  debug(message: string) {
    /* your implementation */
    super.debug(message);
  }
  verbose(message: string) {
    /* your implementation */
    super.verbose(message);
  }
}
