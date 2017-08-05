import {
  Pipe
} from '@angular/core';

@Pipe({
  name: 'phone'
})

export class PhonePipe{
  transform(phoneNumber: number) {
    return String(phoneNumber).substring(0,3) + "-" + String(phoneNumber).substring(3,6) + "-" + String(phoneNumber).substring(6,10);
  }
}
