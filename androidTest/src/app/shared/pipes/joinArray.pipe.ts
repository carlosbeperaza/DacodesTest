import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'gendersPipe',
})
export class GendersPipe implements PipeTransform {
    constructor(public domSanitizer: DomSanitizer) {
    }

    transform(values: any[], ...args: any[]): any {
        if (values.length === 0) {
            return '';
        }
        let genders = [];

        for (const value of values) {
            genders.push(value.name);
        }
        return genders.join(', ');
    }
}
