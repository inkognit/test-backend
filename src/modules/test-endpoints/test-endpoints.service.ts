import { Injectable } from '@nestjs/common';
import { CreateTestEndpointDto } from './dto/create-test-endpoint.dto';
import { UpdateTestEndpointDto } from './dto/update-test-endpoint.dto';

@Injectable()
export class TestEndpointsService {
  create(createTestEndpointDto: CreateTestEndpointDto) {
    return 'This action adds a new testEndpoint';
  }

  findAll() {
    return `This action returns all testEndpoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testEndpoint`;
  }

  update(id: number, updateTestEndpointDto: UpdateTestEndpointDto) {
    return `This action updates a #${id} testEndpoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} testEndpoint`;
  }
}
