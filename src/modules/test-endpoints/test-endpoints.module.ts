import { Module } from '@nestjs/common';
import { TestEndpointsService } from './test-endpoints.service';
import { TestEndpointsController } from './test-endpoints.controller';

@Module({
  controllers: [TestEndpointsController],
  providers: [TestEndpointsService]
})
export class TestEndpointsModule {}
