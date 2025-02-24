import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'YAaY!!! welcome to employee service';
  }
}
