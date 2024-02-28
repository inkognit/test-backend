import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestEndpointsService } from './test-endpoints.service';
import { CreateTestEndpointDto } from './dto/create-test-endpoint.dto';
import { UpdateTestEndpointDto } from './dto/update-test-endpoint.dto';

@Controller('test-endpoints')
export class TestEndpointsController {
  constructor(private readonly testEndpointsService: TestEndpointsService) {}

  @Post()
  create(@Body() createTestEndpointDto: CreateTestEndpointDto) {
    return this.testEndpointsService.create(createTestEndpointDto);
  }

  @Get()
  findAll() {
    return this.testEndpointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testEndpointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestEndpointDto: UpdateTestEndpointDto) {
    return this.testEndpointsService.update(+id, updateTestEndpointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testEndpointsService.remove(+id);
  }
}
