import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TestEndpointsModule } from './modules/test-endpoints/test-endpoints.module';

@Module({
  imports: [TestEndpointsModule],
  providers: [ConfigService],
})
export class AppModule {}
