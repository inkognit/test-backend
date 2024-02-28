import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatchingOrdersDto } from '../dto/matching-orders.dto';
import { OrdersDto } from '../dto/orders.dto';
import { TestEndpointsService } from '../services/test-endpoints.service';

@ApiTags('Test endpoints')
@Controller('test-endpoints')
export class TestEndpointsController {
  constructor(private readonly testEndpointsService: TestEndpointsService) {}

  @Get('getOrders')
  async getOrders(
    @Query()
    query: OrdersDto,
  ) {
    return this.testEndpointsService.getOrders(query);
  }

  @Get('getMatchingOrders')
  async getMatchingOrders(
    @Query()
    query: MatchingOrdersDto,
  ) {
    return this.testEndpointsService.getMatchingOrders(query);
  }
}
