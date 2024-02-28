import { PartialType } from '@nestjs/mapped-types';
import { CreateTestEndpointDto } from './create-test-endpoint.dto';

export class UpdateTestEndpointDto extends PartialType(CreateTestEndpointDto) {}
