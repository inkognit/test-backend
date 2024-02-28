import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { TokensDto } from './tokens.dto';

export class OrdersDto extends TokensDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  user: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  active: boolean;
}
