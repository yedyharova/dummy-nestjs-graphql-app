import { Document } from 'mongoose';

export interface Client {
  name: string;
  signUpDate?: Date;
}

/**
 * For Mongo DB duplicate
 */
export interface ClientEntity extends Document {
  name: string;
  signUpDate?: Date;
}
