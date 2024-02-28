import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { TokensDto } from './tokens.dto';

export class MatchingOrdersDto extends TokensDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  amountA: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  amountB: string;
}
