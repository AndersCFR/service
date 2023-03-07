import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MessagePayloadDto {
  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @IsString()
  @IsNotEmpty()
  readonly to: string;

  @IsString()
  @IsNotEmpty()
  readonly from: string;

  @IsNumber()
  @IsNotEmpty()
  readonly timeToLifeSec: number;

  constructor(payloadDto: MessagePayloadDto) {
    Object.assign(this, payloadDto);
  }
}
