import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizerImage',
})
export class DomSanitizerImagePipe implements PipeTransform {
  constructor(public domSanitizer: DomSanitizer) {}

  transform(value: any, ...args: any[]): any {
    const backStyle = `background-image: url('${value}'); `;
    return this.domSanitizer.bypassSecurityTrustStyle(backStyle);
  }
}
