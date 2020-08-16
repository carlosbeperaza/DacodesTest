import {Component, OnInit} from '@angular/core';

import {HttpService} from '@services/http.service';
import {ResponseInterface} from '@interfaces/response.interface';
import {GameInterface} from '@interfaces/game.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    gamesSegment = 'COM';
    games: GameInterface[] = [];
    spinner = true;

    constructor(
        public http: HttpService,
    ) {
    }

    ngOnInit() {
        this.getGames();
    }

    async getGames() {
        this.spinner = false;
    }

    doRefresh(event: any) {
        this.games = [];
        event.target.complete();
    }
}
