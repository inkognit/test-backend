import { Module } from '@nestjs/common';
import { TestEndpointsService } from './services/test-endpoints.service';
import { TestEndpointsController } from './controllers/test-endpoints.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule.forRoot()],
  controllers: [TestEndpointsController],
  providers: [TestEndpointsService],
})
export class TestEndpointsModule {}
