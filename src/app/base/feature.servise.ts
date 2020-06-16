import { Injectable } from '@nestjs/common';
import { DummyLoggerService } from '@utils/logger/dummy-logger.service';
import { Model, Types } from 'mongoose';
import { Entity } from './entity.base';

@Injectable()
export class FeatureService<T extends Entity> {
  constructor(
    protected dummyLogger: DummyLoggerService,
    protected mongodbModel?: Model<T>,
  ) {
    this.dummyLogger?.setContext(this.constructor.name);
  }

  async create(createDto: T): Promise<T> {
    const createdEntity = new this.mongodbModel(createDto);
    return await createdEntity.save();
  }

  async findAll(): Promise<T[]> {
    this.dummyLogger.log('findAll');
    return await this.mongodbModel.find().exec();
  }

  async findById(id: string): Promise<T> {
    return await this.mongodbModel.findById({ _id: new Types.ObjectId(id) });
  }

  async delete(id: string): Promise<T> {
    return await this.mongodbModel.findByIdAndRemove(id);
  }

  async update(id: string, entity: T): Promise<T> {
    return await this.mongodbModel.findByIdAndUpdate(id, entity, { new: true });
  }
}
