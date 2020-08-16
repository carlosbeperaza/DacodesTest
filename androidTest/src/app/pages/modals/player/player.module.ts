import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {ShareModule} from '@shared/share.module';
import {PlayerPage} from '@pages/modals/player/player.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShareModule
    ],
    declarations: [PlayerPage]
})
export class PlayerPageModule {
}
