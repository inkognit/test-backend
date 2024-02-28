import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TestEndpointsService {
  constructor(private readonly prisma: PrismaService) {}

  getOrders(query) {
    return `This action returns all testEndpoints`;
  }

  getMatchingOrders(query) {
    return `This action returns a  testEndpoint`;
  }
}
