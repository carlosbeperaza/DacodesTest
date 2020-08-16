import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DomSanitizerImagePipe} from './pipes/dom-sanitizer-image.pipe';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [
        DomSanitizerImagePipe,
    ],
    exports: [
        DomSanitizerImagePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule,
    ]
})
export class ShareModule {
}
