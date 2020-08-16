import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PlayerPage} from '@pages/modals/player/player.page';

@Component({
    selector: 'app-players',
    templateUrl: './players.page.html',
    styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

    constructor(
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }


    async playerDetails() {

        const modal = await this.modalController.create({
            component: PlayerPage,
            componentProps: {
                player: 'Douglas',
            }
        });

        return await modal.present();
    }

}
