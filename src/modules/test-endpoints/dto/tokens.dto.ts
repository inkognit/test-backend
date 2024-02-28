import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class TokensDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  tokenA: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  tokenB: string;
}
