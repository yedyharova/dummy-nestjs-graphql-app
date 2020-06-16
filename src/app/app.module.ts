import { MONGODB_CONNECTION_STRING } from '@common/tokens';
import { ClientModule } from '@features/client/client.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION_STRING),

    ClientModule,
    GraphQLModule.forRoot({
      debug: true,
      include: [ClientModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      //playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
