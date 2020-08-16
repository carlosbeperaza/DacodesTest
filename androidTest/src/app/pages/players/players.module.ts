import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';

import {PlayersPage} from '@pages/players/players.page';

import {ShareModule} from '@shared/share.module';
import {PlayerPage} from '@pages/modals/player/player.page';
import {PlayerPageModule} from '@pages/modals/player/player.module';


const routes: Routes = [
    {
        path: '',
        component: PlayersPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ShareModule,
        PlayerPageModule
    ],
    declarations: [PlayersPage],
    entryComponents: [
        PlayerPage
    ]
})
export class PlayersPageModule {
}
