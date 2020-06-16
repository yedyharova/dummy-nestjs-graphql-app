import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientDto } from './client.dto';
import { Client } from './client.interface';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  async create(@Body() createClientDto: ClientDto): Promise<Client> {
    return this.clientService.create(createClientDto);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }
}
