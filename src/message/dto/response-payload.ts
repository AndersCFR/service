import { IsNotEmpty, IsString } from 'class-validator';

export class ResponsePayloadDto {
  @IsString()
  @IsNotEmpty()
  readonly message: string;

  constructor(responsePayloadDto: ResponsePayloadDto) {
    Object.assign(this, responsePayloadDto);
  }
}
