import { Test, TestingModule } from '@nestjs/testing';
import { TestEndpointsController } from './test-endpoints.controller';
import { TestEndpointsService } from './test-endpoints.service';

describe('TestEndpointsController', () => {
  let controller: TestEndpointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestEndpointsController],
      providers: [TestEndpointsService],
    }).compile();

    controller = module.get<TestEndpointsController>(TestEndpointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
