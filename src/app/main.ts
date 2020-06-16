import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import dotenv from 'dotenv';
/* import csurf from 'csurf';

import rateLimit from 'express-rate-limit'; */
//import * as fs from 'fs';
//import helmet from 'helmet';
import { AppModule } from './app.module';

//initialize configuration
dotenv.config();

async function bootstrap() {
 /*  const httpsOptions = {
    key: '' && false && fs.readFileSync('../keys/private-key.pem'),
    cert: '' && false && fs.readFileSync('../keys/public-certificate.pem'),
  }; */

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {

  });

  

  await app.listen(process.env.SERVER_PORT);


}
bootstrap();

//pull of DB-connections
