import { Entity, EntityInput } from '@base/entity.base';
import { Field, GraphQLISODateTime, InputType, ObjectType } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { Client, ClientEntity } from './client.interface';

export const ClientSchema = new Schema({
  name: String,
  signUpDate: Date,
});

@ObjectType()
export class ClientDto extends Entity implements ClientEntity {
  @Field()
  readonly name: string;

  @Field(() => GraphQLISODateTime)
  readonly signUpDate: Date;
}

@InputType()
export class ClientInputDto extends EntityInput implements Client {
  @Field()
  readonly name: string;
}
