import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
    @Input() player;

    constructor(
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }

}
