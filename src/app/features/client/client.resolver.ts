import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientDto, ClientInputDto } from './client.dto';
import { ClientEntity } from './client.interface';
import { ClientService } from './client.service';

@Resolver()
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(returns => ClientDto, { nullable: true, name: 'client' })
  async getClient(@Args('id', { type: () => String }) id: string) {
    return this.clientService.findById(id);
  }

  @Mutation(returns => ClientDto, { name: 'createClient' })
  async createClient(@Args('client') client: ClientInputDto) {
    return this.clientService.create(client as ClientEntity);
  }

  @Mutation(returns => ClientDto, { name: 'updateClient' })
  async updateClient(
    @Args('id') id: string,
    @Args('client') client: ClientInputDto,
  ) {
    return this.clientService.update(id, client as ClientEntity);
  }
}
