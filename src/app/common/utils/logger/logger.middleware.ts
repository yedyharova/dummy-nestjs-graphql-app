import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  //can be async to awaint in the configure inside the module ??
  async use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
