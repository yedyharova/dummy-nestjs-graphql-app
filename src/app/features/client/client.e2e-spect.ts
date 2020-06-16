import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { Client } from './client.interface';
import { ClientModule } from './client.module';

describe('ClientController (e2e)', () => {
  let app;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ClientModule,
        MongooseModule.forRoot('mongodb://localhost/nestgraphqltesting'),
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
        }),
      ],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterAll(async () => {
    await app.close();
  });

  const client: Partial<Client> = {
    name: 'MAFIA',
  };
  let id: string = '';
  const updatedClient: Partial<Client> = {
    name: '!MAFIA',
  };

  const createClientObject = JSON.stringify(client).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  const createClientQuery = `
    mutation {
      createClient(input: ${createClientObject}) {
        name
        email
        phone
        id
      }
    }`;

  it('createClient', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: createClientQuery,
      })
      .expect(({ body }) => {
        const data = body.data.createClient;
        id = data.id;
        expect(data.name).toBe(client.name);
      })
      .expect(200);
  });
});
