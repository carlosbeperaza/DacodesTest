import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {DomSanitizerImagePipe} from '@shared/pipes/dom-sanitizer-image.pipe';
import {GendersPipe} from '@shared/pipes/joinArray.pipe';


@NgModule({
    declarations: [
        DomSanitizerImagePipe,
        GendersPipe
    ],
    exports: [
        DomSanitizerImagePipe,
        GendersPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule,
    ]
})
export class ShareModule {
}
